import React from 'react';
import { Alert, Keyboard } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Yup from 'yup';

import { AppForm, AppFormField, FormField, SubmitButton } from './forms';
import messagesApi from '../api/messages';

// const { Keyboard } = require('react-native');

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log('Error', result);
      return Alert.alert('Error', 'Could not send the message to the seller.');
    }

    resetForm();

    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Awesome!',
        body: 'Your message was sent to the seller.'
      },
      trigger: {
        seconds: 1,
      },
    });
  };

  return (
    <AppForm
      initialValues={{ message: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormField
        maxLength={255}
        multiline
        name="message"
        numberOfLines={3}
        placeholder="Message..."
      />
      <SubmitButton title='Contact Seller' />
    </AppForm>
  );
}

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

export default ContactSellerForm;