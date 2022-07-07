import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';

import AppText from '../components/AppText';
import colors from '../config/colors';

function UploadScreen({ progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {/* <AppText>{progress * 100}%</AppText> */}
        <Progress.Bar
          color={colors.primary}
          progress={progress}
          width={200}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default UploadScreen;