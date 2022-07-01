import React from 'react';
import Constants from 'expo-constants';
import { Platform, SafeAreaView, StyleSheet, View } from 'react-native';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {/* <View style={style}> */}
      {children}
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight / 2 : Constants.statusBarHeight,
    // paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;