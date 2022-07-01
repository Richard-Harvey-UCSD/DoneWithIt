// import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {
  Dimensions,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountScreen from './app/screens/AccountScreen';
import AppButton from './app/components/AppButton';
// import AppText from './app/components/AppText/AppText';
import AppText from './app/components/AppText';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  const [firstName, setFirstName] = useState('');

  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        clearButtonMode='always'
        maxLength={30}
        onChangeText={text => setFirstName(text)}
        placeholder='First Name'
        style={{
          borderBottomColor: '#ccc',
          borderBottomWidth: 1
        }}
      />

      {/* <ListingsScreen /> */}

      {/* <AccountScreen /> */}

      {/* <ListItem
      title='My title'
      subTitle={'My subtitle'}
      ImageComponent={<Icon name='email' />}
    /> */}

      {/* <Icon
      name='email'
      size={50}
      backgroundColor='red'
      iconColor='white'
    /> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  borders: {
    backgroundColor: 'dodgerblue',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'royalblue',
    borderRadius: 50,
    // borderTopWidth: 20,
    // borderTopLeftRadius: 50,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerSquare: {
    backgroundColor: 'gold',
    width: 50,
    height: 50,
  },
  padding: {
    backgroundColor: 'dodgerblue',
    width: 100,
    height: 100,
    padding: 20,
    paddingHorizontal: 10,
    paddingLeft: 30
  },
  secondSquare: {
    backgroundColor: 'tomato',
    width: 100,
    height: 100,
    margin: 20,
  },
  shadows: {
    backgroundColor: 'dodgerblue',
    width: 100,
    height: 100,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 20,
  },
  text: {
    // fontFamily: 'helvetica-times',
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: '700',
    color: 'blue',
    textTransform: 'capitalize',
    textDecorationLine: 'line-through',
    textAlign: 'center',
    lineHeight: 30,
  }
});

// Account screen planning:
// 2 ListItems - account details & logout
// 1 FlatList - listings, account info, etc.