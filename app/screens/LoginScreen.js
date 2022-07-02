import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import ErrorMessage from '../components/ErrorMessage';
import Screen from '../components/Screen';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen style={styles.container}>
      <Image
        source={require('../assets/logo-red.png')}
        style={styles.logo}
      />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          name='email'
          // onBlur={() => setFieldTouched('email')}
          // onChangeText={handleChange('email')}
          placeholder='Email'
          textContentType='emailAddress'
        />
        {/* <AppText style={{ color: 'red' }}>{errors.email}</AppText> */}
        {/* <ErrorMessage error={errors.email} visible={touched.email} /> */}
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          // keyboardType='email-address'
          name='password'
          // onBlur={() => setFieldTouched('password')}
          // onChangeText={handleChange('password')}
          placeholder='Password'
          secureTextEntry
          textContentType='password'
          editable
        />
        {/* <AppText style={{ color: 'red' }}>{errors.password}</AppText> */}
        {/* <ErrorMessage error={errors.password} visible={touched.password} /> */}
        {/* <AppButton
              onPress={handleSubmit}
              title='Login'
            /> */}
        <SubmitButton title='Login' />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;