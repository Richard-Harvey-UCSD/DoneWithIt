// import Constants from 'expo-constants';
import React from 'react';
import {
  FlatList,
  // Platform,
  // SafeAreaView,
  // StatusBar,
  StyleSheet
} from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';

const messages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg')
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg')
  },
];

function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) =>
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  // screen: {
  //   // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  //   // console: console.log(StatusBar.currentHeight),
  //   paddingTop: Constants.statusBarHeight,
  // }
});

export default MessagesScreen;