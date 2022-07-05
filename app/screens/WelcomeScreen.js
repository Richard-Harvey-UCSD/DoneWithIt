import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View
} from "react-native";

import AppButton from '../components/AppButton';

const WelcomeScreen = ({ navigation }) => {
  return (
    // <View>
    <ImageBackground
      style={styles.background}
      blurRadius={10}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title='Login' color='primary' onPress={() => navigation.navigate('Login')} />
        <AppButton title='Register' color='secondary' onPress={() => navigation.navigate('Register')} />
      </View>
    </ImageBackground>
    // </View>
  );
};

const styles = StyleSheet.create({
  background: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
    // height: '100%',
    marginTop: 600,
  },
  // loginButton: {
  //   width: '100%',
  //   height: 70,
  //   backgroundColor: '#fc5c65',
  // },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  },
  // registerButton: {
  //   width: '100%',
  //   height: 70,
  //   backgroundColor: '#4ecdc4',
  // },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingTop: 20,
  },
});

export default WelcomeScreen;
