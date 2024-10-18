import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator'; // Import the Bottom Tabs
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const RootNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeTabs">
      {/* BottomTabNavigator will be one of the drawer screens */}
      <Drawer.Screen name="HomeTabs" component={BottomTabNavigator} options={{ title: 'Home' }} />
      <Drawer.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
    </Drawer.Navigator>
  );
};

export default RootNavigator;
