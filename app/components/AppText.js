import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

// import styles from './AppText/styles';

// <Heading>My Heading</Heading>
function AppText({ children, style }) {
  return (
    <Text style={[styles.text, style]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: 'Avenir',
      },
      android: {
        fontSize: 18,
        fontFamily: 'Roboto',
      },
    }),
  },
});

export default AppText;