import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';


// <Heading>My Heading</Heading>
function AppText({ children }) {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Lucida' : 'Copperplate',
  }
});

export default AppText;