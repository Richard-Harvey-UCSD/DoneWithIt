import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountNavigator from './AccountNavigator';
import AccountScreen from '../screens/AccountScreen';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import ListingsScreen from '../screens/ListingsScreen';
import NewListingButton from './NewListingButton';
import routes from './routes';

const Tab = createBottomTabNavigator();

export default AppNavigator = () => (
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
          />
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
          />
      }}
    />
  </Tab.Navigator>
);

// export default AppNavigator;