import React from 'react'
import Feed from '../screens/Feed';
import UserDetail from '../screens/UserDetail';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator>
        <Stack.Screen name="Feed" component={Feed}/>
        <Stack.Screen name="UserDetail" component={UserDetail}/>
    </Stack.Navigator>
);