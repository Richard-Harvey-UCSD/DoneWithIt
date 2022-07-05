import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';


import AccountScreen from '../screens/AccountScreen';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import ListingsScreen from '../screens/ListingsScreen';

const Tab = createBottomTabNavigator();

export default AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name='Feed' component={FeedNavigator} />
    <Tab.Screen name='ListingEdit' component={ListingEditScreen} />
    <Tab.Screen name='Account' component={AccountScreen} />
  </Tab.Navigator>
);

// export default AppNavigator;