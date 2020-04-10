import Home from '../screens/Home';
import Home2 from '../screens/Home2';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Home2" component={Home2}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}