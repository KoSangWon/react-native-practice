import React from 'react';
import Feed from './src/screens/Feed';
import Add from './src/screens/Add';
import Search from './src/screens/Search';
import Like from './src/screens/Like';
import My from './src/screens/My';
import FeedStack from './src/navigations/FeedStack';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedStack} options={{
          tabBarVisible: false,
        }}/>
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Add" component={Add} />
        <Tab.Screen name="Like" component={Like} />
        <Tab.Screen name="My" component={My} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
