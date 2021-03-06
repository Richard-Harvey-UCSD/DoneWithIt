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
import expoPushTokensApi from '../api/expoPushTokens';
import navigation from './rootNavigation';
import useNotifications from '../hooks/useNotifications';

const Tab = createBottomTabNavigator();

export default AppNavigator = () => {
  // useEffect(() => {
  //   registerForPushNotifications();

  //   // Notifications.addListener(notification => {
  //   //   navigation.navigate('Account');
  //   // });

  //   Notifications.addNotificationResponseReceivedListener(() => {
  //     navigation.navigate('Account');
  //   });

  //   // const subscription = Notifications.addNotificationResponseReceivedListener(notification => {
  //   //   console.log(notification);
  //   // });
  //   // return () => subscription.remove();
  // }, []);

  // const registerForPushNotifications = async () => {
  //   try {
  //     const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  //     if (!permission.granted) return;

  //     const token = await Notifications.getExpoPushTokenAsync();
  //     expoPushTokensApi.register(token);
  //     // console.log('token: ', token);
  //   } catch (error) {
  //     console.log('Error getting a push token', error);
  //   }
  // };

  useNotifications(() => {
    navigation.navigate('ListingEdit');
  });

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