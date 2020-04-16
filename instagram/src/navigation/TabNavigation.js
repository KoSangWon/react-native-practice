import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Upload from '../screens/Upload';
import Like from '../screens/Like';
import Setting from '../screens/Setting';


const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.screen name="Search" component={Search}/>
          
          <Tab.Screen name="Settings" component={Setting} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

export default MyTabs;