import React from 'react';
import Constants from 'expo-constants';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight / 3 : Constants.statusBarHeight,
    // paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;