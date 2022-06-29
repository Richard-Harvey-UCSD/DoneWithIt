import React from 'react';
import {
  Image,
  ImageBackground, StyleSheet, Text, View
} from "react-native";
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title='Login' color='primary' />
        <AppButton title='Register' color='secondary' />
      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
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
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
