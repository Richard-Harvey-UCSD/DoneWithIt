import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ListItemDeleteAction(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name='trash-can'
        size={35}
        color={colors.white}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ListItemDeleteAction;