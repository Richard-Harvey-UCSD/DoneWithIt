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

export default function App() {
  console.log(Dimensions.get('screen'));

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '50%',
        height: '10%',
      }}>
        <Text>Open up App.js to start shit on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
