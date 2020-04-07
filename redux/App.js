import React from 'react';
import Home from './src/screens/Home';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
};


export default App;
