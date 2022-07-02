import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen style={styles.container}>
      <Image
        source={require('../assets/logo-red.png')}
        style={styles.logo}
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='email'
        keyboardType='email-address'
        onChangeText={text => setEmail(text)}
        placeholder='Email'
        textContentType='emailAddress'
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='lock'
        // keyboardType='email-address'
        onChangeText={text => setPassword(text)}
        placeholder='Password'
        secureTextEntry
        textContentType='password'
        editable
      />
      <AppButton
        onPress={() => console.log(email, password)}
        title='Login'
      />
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