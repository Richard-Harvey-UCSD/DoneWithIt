import React from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import defaultStyles from '../config/styles';

function AppTextInput({ icon, width = '100%', ...otherProps }) {
  // console.log(icon, otherProps);

  return (
    <View style={[styles.container, { width }]}>
      {icon &&
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.black}
          style={styles.icon}
        />
      }
      <TextInput
        // placeholder={placeholder}
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    marginVertical: 10,
    padding: 15,
    // width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  // textInput: {
  //   color: colors.dark,
  //   fontSize: 18,
  //   fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  // }
});

export default AppTextInput;