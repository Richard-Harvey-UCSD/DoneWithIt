import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';

import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ListingsScreen from '../screens/ListingsScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    mode='modal'
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name='Listings'
      component={ListingsScreen}
    />
    <Stack.Screen
      name='ListingDetails'
      component={ListingDetailsScreen}
    // options={{
    //   // headerShown: Platform.OS === 'android' ? true : false,
    //   headerShown: false,
    // }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;