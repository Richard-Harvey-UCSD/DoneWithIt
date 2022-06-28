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

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppText from './app/components/AppText';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <View style={styles.padding}>
        <View style={styles.innerSquare}></View>
      </View>
      <View style={styles.secondSquare}></View> */}
      {/* <AppText style={styles.text}>I love React Native!</AppText> */}
      <ScrollView style={styles.scroller}>
        <Text style={{ fontFamily: 'normal' }}>  normal </Text>
        <Text style={{ fontFamily: 'notoserif' }}>  notoserif </Text>
        <Text style={{ fontFamily: 'sans-serif' }}>  sans-serif </Text>
        <Text style={{ fontFamily: 'sans-serif-light' }}>  sans-serif-light </Text>
        <Text style={{ fontFamily: 'sans-serif-thin' }}>  sans-serif-thin </Text>
        <Text style={{ fontFamily: 'sans-serif-condensed' }}>  sans-serif-condensed </Text>
        <Text style={{ fontFamily: 'sans-serif-medium' }}>  sans-serif-medium </Text>
        <Text style={{ fontFamily: 'serif' }}>  serif </Text>
        <Text style={{ fontFamily: 'Roboto' }}>  Roboto </Text>
        <Text style={{ fontFamily: 'monospace' }}>  monospace </Text>
      </ScrollView>
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
