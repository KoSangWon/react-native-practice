import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk'

const initialState = {
    isLoaded: false,
    count: 0,
}


export const SET_IS_LOADED = 'SET_IS_LOADED';
export const ADD = 'ADD';
export const MINUS = 'MINUS';
const reducer = (state=initialState, action) => {
    switch(action.type){
        case SET_IS_LOADED:
            return {...state, isLoaded: action.isLoaded}
        case ADD:
            return {...state, count: state.count+1}
        case MINUS:
            return {...state, count: state.count-1}
        default:
            return state;
        
    }
};

//서버와 통신
export const getApi = () => {
    //thunk가 가능하게 해줌.
    return async (dispatch, getState) => {
        const data = await fetch('https://yts.mx/api/v2/list_movies.json?limit=50');
        const {isLoaded} = getState();
        dispatch({type: SET_IS_LOADED, isLoaded: !isLoaded});
        return data;
    }
}

const store = createStore(reducer, applyMiddleware(thunk));

//console.log(store.getState());

export default store;