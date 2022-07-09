import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import AccountNavigator from './AccountNavigator';
import AccountScreen from '../screens/AccountScreen';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import ListingsScreen from '../screens/ListingsScreen';
import NewListingButton from './NewListingButton';
import routes from './routes';

const Tab = createBottomTabNavigator();

export default AppNavigator = () => {
  useEffect(() => {
    registerForPushNotifications();
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      console.log('token: ', token);
    } catch (error) {
      console.log('Error getting a push token', error);
    }
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Feed'
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons
              name='home'
              color={color}
              size={size}
            />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='ListingEdit'
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () =>
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />,
          tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons
              name='plus-circle'
              color={color}
              size={size}
            />,
          headerShown: false,
        })}
      />
      <Tab.Screen
        name='Account'
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons
              name='account'
              color={color}
              size={size}
            />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

// export default AppNavigator;