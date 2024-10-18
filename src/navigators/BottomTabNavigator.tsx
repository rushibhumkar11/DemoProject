import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import Notification from '../screens/Notification';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
      <Tab.Screen name="Notifications" component={Notification} options={{ title: 'Notifications' }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
