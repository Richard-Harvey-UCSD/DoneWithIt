// import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from "./app/screens/AccountScreen";
import AppButton from "./app/components/AppButton";
import AppPicker from './app/components/AppPicker';
// import AppText from './app/components/AppText/AppText';
import AppText from "./app/components/AppText";
import AppTextInput from "./app/components/AppTextInput";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// import ListingEditScreen from './app/screens/ListingEditScreen_MINE';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListingsScreen from "./app/screens/ListingsScreen";
import ListItem from "./app/components/ListItem";
import LoginScreen from './app/screens/LoginScreen';
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
];

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState(categories[0]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen>
      {/* <Image
        source={require('./app/assets/logo-red.png')}
        style={styles.logo}
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='email'
        keyboardType='email-address'
        onChangeText={text => setEmail(text)}
        placeholder='Email'
        textContentType='emailAddress'
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='lock'
        // keyboardType='email-address'
        onChangeText={text => setPassword(text)}
        placeholder='Password'
        secureTextEntry
        textContentType='password'
        editable
      />
      <AppButton
        onPress={() => console.log(email, password)}
        title='Login'
      /> */}
      <ListingEditScreen />
      {/* <LoginScreen /> */}
      {/* <AppButton
        title='button'
        onPress={() => console.log('pressed')}
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='lock'
        // keyboardType='email-address'
        onChangeText={text => setPassword(text)}
        placeholder='Password'
        secureTextEntry
        textContentType='password'
        editable
      /> */}
      {/* <Switch
        value={isNew}
        onValueChange={(newValue) => setIsNew(newValue)}
        ios_backgroundColor={'red'}
        thumbColor={'white'}
        trackColor={{ false: 'red', true: 'green' }}
      /> */}

      {/* <StatusBar hidden={false} backgroundColor='black' /> */}
      {/* <AppPicker
        icon='apps'
        items={categories}
        onSelectItem={item => setCategory(item)}
        placeholder='Category'
        selectedItem={category}
      />
      <AppTextInput
        icon='email'
        placeholder='Email'
      /> */}

      {/* <Text>{firstName}</Text>
      <TextInput
        clearButtonMode='always'
        maxLength={30}
        onChangeText={text => setFirstName(text)}
        placeholder='First Name'
        style={{
          borderBottomColor: '#ccc',
          borderBottomWidth: 1
        }}
      /> */}

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
    backgroundColor: "dodgerblue",
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "royalblue",
    borderRadius: 50,
    // borderTopWidth: 20,
    // borderTopLeftRadius: 50,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  innerSquare: {
    backgroundColor: "gold",
    width: 50,
    height: 50,
  },
  padding: {
    backgroundColor: "dodgerblue",
    width: 100,
    height: 100,
    padding: 20,
    paddingHorizontal: 10,
    paddingLeft: 30,
  },
  secondSquare: {
    backgroundColor: "tomato",
    width: 100,
    height: 100,
    margin: 20,
  },
  shadows: {
    backgroundColor: "dodgerblue",
    width: 100,
    height: 100,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 20,
  },
  text: {
    // fontFamily: 'helvetica-times',
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "700",
    color: "blue",
    textTransform: "capitalize",
    textDecorationLine: "line-through",
    textAlign: "center",
    lineHeight: 30,
  },
});

// Account screen planning:
// 2 ListItems - account details & logout
// 1 FlatList - listings, account info, etc.
