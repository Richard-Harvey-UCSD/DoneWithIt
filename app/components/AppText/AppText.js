import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

// <Heading>My Heading</Heading>
function AppText({ children }) {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}

export default AppText;