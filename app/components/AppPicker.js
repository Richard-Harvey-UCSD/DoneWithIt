import React, { useState } from 'react';
import { Button, Modal, Platform, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import Screen from './Screen';

function AppPicker({ icon, placeholder, ...otherProps }) {
  // console.log(icon);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={console.log('pressed')}>
        < View style={styles.container} >
          {icon &&
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          }
          <TextInput
            style={defaultStyles.text}
            {...otherProps}
          />
          <AppText
            style={styles.text}
          >
            {placeholder}
          </AppText>
          <MaterialCommunityIcons
            name={'chevron-down'}
            size={20}
            color={colors.medium}
            style={styles.icon}
          />
        </View >
      </TouchableWithoutFeedback >
      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <Button title='Close' onPress={() => setModalVisible(false)} />
        </Screen>
      </Modal>
    </>
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
    width: '100%',
  },
  icon: {
    marginRight: Platform.OS === 'android' ? -10 : 10,
  },
  text: {
    flex: 1,
  },
  // textInput: {
  //   color: colors.dark,
  //   fontSize: 18,
  //   fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  // }
});

export default AppPicker;