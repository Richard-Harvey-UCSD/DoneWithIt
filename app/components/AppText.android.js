import React from 'react';
import { StyleSheet, Text } from 'react-native';

function AppText({ children }) {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    fontSize: 18,
    fontFamily: 'Roboto',
  },
});

export default AppText;