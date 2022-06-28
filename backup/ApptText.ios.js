import React from 'react';
import { StyleSheet, Text } from 'react-native';

function AppText({ children }) {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 20,
    fontFamily: 'Avenir',
  },
});

export default AppText;