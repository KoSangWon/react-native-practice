import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Friends from './src/screens/Friends';
import Message from './src/screens/Message';
import News from './src/screens/News';
import MyPage from './src/screens/MyPage';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Friends" component={Friends}/>
        <Tab.Screen name="Message" component={Message}/>
        <Tab.Screen name="News" component={News}/>
        <Tab.Screen name="MyPage" component={MyPage}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
