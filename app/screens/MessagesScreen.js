// import Constants from 'expo-constants';
import React, { useState } from 'react';
import {
  FlatList,
  // Platform,
  // SafeAreaView,
  // StatusBar,
  StyleSheet,
  View
} from 'react-native';

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    // delete the message from messages
    // call the server
    setMessages(messages.filter(m => m.id !== message.id));
  };

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
            onPress={() => console.log()}
            renderRightActions={() =>
              <ListItemDeleteAction onPress={() => handleDelete(item)}
              />
            }
          />
        }
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/mosh.jpg')
            },
          ]);
        }}
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