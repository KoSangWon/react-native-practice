import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Upload from '../screens/Upload';
import Like from '../screens/Like';
import MyPage from '../screens/MyPage';
import Icon from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Upload') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Like') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Mypage') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Upload" component={Upload} />
          <Tab.Screen name="Like" component={Like} />
          <Tab.Screen name="MyPage" component={MyPage} />

        </Tab.Navigator>
      </NavigationContainer>
    );
  }

export default MyTabs;