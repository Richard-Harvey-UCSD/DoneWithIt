import { Platform, StyleSheet } from 'react-native';

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

export default styles;