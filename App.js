// import { StatusBar } from 'expo-status-bar';
import React from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
// import AppText from './app/components/AppText/AppText';
import AppText from './app/components/AppText';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      <View style={styles.padding}>
        <View style={styles.innerSquare}></View>
      </View>
      <View style={styles.secondSquare}></View>
      <AppText>I love React Native!</AppText>
      <MaterialCommunityIcons name='email' size={200} color='dodgerblue' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  borders: {
    backgroundColor: 'dodgerblue',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'royalblue',
    borderRadius: 50,
    // borderTopWidth: 20,
    // borderTopLeftRadius: 50,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerSquare: {
    backgroundColor: 'gold',
    width: 50,
    height: 50,
  },
  padding: {
    backgroundColor: 'dodgerblue',
    width: 100,
    height: 100,
    padding: 20,
    paddingHorizontal: 10,
    paddingLeft: 30
  },
  secondSquare: {
    backgroundColor: 'tomato',
    width: 100,
    height: 100,
    margin: 20,
  },
  shadows: {
    backgroundColor: 'dodgerblue',
    width: 100,
    height: 100,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 20,
  },
  text: {
    // fontFamily: 'helvetica-times',
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: '700',
    color: 'blue',
    textTransform: 'capitalize',
    textDecorationLine: 'line-through',
    textAlign: 'center',
    lineHeight: 30,
  }
});
