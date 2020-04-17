import React from 'react'
import {Dimensions} from 'react-native';
import styled from 'styled-components';
import {withNavigation} from '@react-navigation/compat';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const {width: sWidth} = Dimensions.get('screen');

const Container = styled.View`
    width: ${sWidth};
    height: 100px;
    background-color: lightgreen;
    flex-direction: row;
`;


//그냥 TouchableOpacity쓸 때 아래와 같이 쓴다.
// const Button = styled.TouchableOpacity`
//     width: 100px;
//     height: 100px;
//     background-color: white;
//     border-radius: 50px;
// `;


//TouchableWithoutFeedback사용시 아래와 같이 쓴다.
const Button = styled.View`
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 50px;
`;

const TabBar = ({navigation}) => {
    return (
        <Container>
            <TouchableWithoutFeedback
            onPress={() => {
                navigation.navigate('Search');
            }}>
                <Button/>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
            onPress={() => {
                navigation.navigate('Search');
            }}>
                <Button/>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
            onPress={() => {
                navigation.navigate('Search');
            }}>
                <Button/>
            </TouchableWithoutFeedback>
            
        </Container>
        
    );
};

export default withNavigation(TabBar);