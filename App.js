// import { StatusBar } from 'expo-status-bar';
import React from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView
} from 'react-native';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      <View style={styles.border}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    backgroundColor: 'dodgerblue',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'royalblue',
    borderRadius: 50,
    // borderTopWidth: 20,
    // borderTopLeftRadius: 50,
  }
});
