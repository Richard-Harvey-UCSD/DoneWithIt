import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';

import AccountScreen from '../screens/AccountScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ListingsScreen from '../screens/ListingsScreen';
import MessagesScreen from '../screens/MessagesScreen';

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Account'
      component={AccountScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name='Messages'
      component={MessagesScreen}
      // options={{
      //   headerShown: Platform.OS === 'android' ? true : false,
      // }}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AccountNavigator;