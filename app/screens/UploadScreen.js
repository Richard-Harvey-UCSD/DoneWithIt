import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';
import Constants from 'expo-constants';

import AppText from '../components/AppText';
import colors from '../config/colors';

function UploadScreen({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible} >
      <View style={styles.container}>
        {/* <AppText>{progress * 100}%</AppText> */}
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require('../assets/animations/done.json')}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    // marginTop: 300,
    // paddingTop: Constants.statusBarHeight,
  },
});

export default UploadScreen;