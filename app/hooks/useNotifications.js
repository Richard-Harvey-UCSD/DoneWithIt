import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import expoPushTokensApi from '../api/expoPushTokens';


export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    // Notifications.addListener(notification => {
    //   navigation.navigate('Account');
    // });

    // Notifications.addNotificationResponseReceivedListener(() => {
    //   navigation.navigate('Account');
    // });
    if (notificationListener)
      Notifications.addNotificationResponseReceivedListener(notificationListener);

    // const subscription = Notifications.addNotificationResponseReceivedListener(notification => {
    //   console.log(notification);
    // });
    // return () => subscription.remove();
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token);
      // console.log('token: ', token);
    } catch (error) {
      console.log('Error getting a push token', error);
    }
  };
};