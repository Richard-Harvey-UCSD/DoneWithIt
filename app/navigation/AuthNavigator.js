import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';


const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={WelcomeScreen}
      name='Welcome'
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      component={LoginScreen}
      name='Login'
    />
    {/* <Stack.Screen
      component={RegisterScreen}
      name='Register'
    /> */}
  </Stack.Navigator>
);

export default AuthNavigator;