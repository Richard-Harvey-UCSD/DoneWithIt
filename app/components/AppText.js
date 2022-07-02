import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

import colors from '../config/colors';

// import styles from './AppText/styles';

// <Heading>My Heading</Heading>
function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.dark,
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