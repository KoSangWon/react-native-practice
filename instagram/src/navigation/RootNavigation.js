import React from 'react';
import Home from '../screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigaionContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default () => {
    return (
        <NavigaionContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
        </NavigaionContainer>
    );
}
