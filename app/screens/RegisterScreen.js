import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import usersApi from '../api/users';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';
import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  name: Yup.string().required().label('Name'),
  password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen() {
  const auth = useAuth();
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const [error, setError] = useState();

  const handleSubmit = async userInfo => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError('An unexpected error occurred.');
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <AppFormField
            autoCapitalize='words'
            autoCorrect={false}
            icon='account'
            name='name'
            placeholder='Name'
          />
          <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='email'
            keyboardType='email-address'
            name='email'
            placeholder='Email'
            textContentType='emailAddress'
          />
          <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='lock'
            name='password'
            placeholder='Password'
            secureTextEntry
            textContentType='password'
            editable
          />
          <SubmitButton title='Register' />
        </AppForm>
      </Screen>
    </>
  );

}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;