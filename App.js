// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  ImageComponent,
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
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from "./app/screens/AccountScreen";
import AppButton from "./app/components/AppButton";
import AppPicker from './app/components/AppPicker';
// import AppText from './app/components/AppText/AppText';
import AppText from "./app/components/AppText";
import AppTextInput from "./app/components/AppTextInput";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
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

  const [imageUris, setImageUris] = useState([]);

  // methods
  const handleAdd = uri => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = uri => {
    setImageUris(imageUris.filter(imageUri => imageUri !== uri));
  };

  const Link = () => {
    const navigation = useNavigation();

    return (
      <Button
        title='Click'
        onPress={() => navigation.navigate('TweetDetails', { id: 1 })}
      />
    );
  };

  // components
  const Tweets = () => (
    <Screen>
      <Text>Tweets</Text>
      <Link />
    </Screen>
  );

  const TweetDetails = ({ route }) => (
    <Screen>
      <Text>Tweet Details {route.params.id}</Text>
    </Screen>
  );

  const Stack = createStackNavigator();
  const StackNavigator = () => (
    <Stack.Navigator
      initialRouteName='Tweets'
      screenOptions={{
        headerStyle: { backgroundColor: 'dodgerblue' },
        headerTintColor: 'white',
        headerShown: true,
      }}
    >
      <Stack.Screen
        name='Tweets'
        component={Tweets}
        options={{
          headerStyle: { backgroundColor: 'tomato' },
          headerTintColor: 'white',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name='TweetDetails'
        component={TweetDetails}
        options={({ route }) => ({ title: route.params.id })}
      />
    </Stack.Navigator>
  );

  const Account = () => (
    <Screen>
      <Text>Account</Text>
    </Screen>
  );

  const Tab = createBottomTabNavigator();
  const TabNavigator = () => (
    <Tab.Navigator>
      <Tab.Screen
        name='Feed'
        component={Tweets}
      />
      <Tab.Screen
        name='Account'
        component={Account}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
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
