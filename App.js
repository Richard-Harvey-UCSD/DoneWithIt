// import { StatusBar } from 'expo-status-bar';
import
React,
{
  useEffect,
  useState
} from "react";
import {
  AsyncStorage,
  Button,
  Dimensions,
  Image,
  ImageComponent,
  LogBox,
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
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import jwtDecode from 'jwt-decode';
import AppLoading from 'expo-app-loading';

LogBox.ignoreAllLogs();

import AccountScreen from "./app/screens/AccountScreen";
import AppButton from "./app/components/AppButton";
import AppNavigator from './app/navigation/AppNavigator';
import AppPicker from './app/components/AppPicker';
// import AppText from './app/components/AppText/AppText';
import AppText from "./app/components/AppText";
import AppTextInput from "./app/components/AppTextInput";
import AuthContext from './app/auth/context';
import AuthNavigator from './app/navigation/AuthNavigator';
import Card from "./app/components/Card";
import colors from './app/config/colors';
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
import NavigationTheme from './app/navigation/NavigationTheme';
import OfflineNotice from './app/components/OfflineNotice';
import routes from './app/navigation/routes';
import Screen from "./app/components/Screen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import authStorage from './app/auth/storage';
import { navigationRef } from './app/navigation/rootNavigation';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
];

export default function App() {
  // NetInfo.fetch().then(netInfo => console.log(netInfo));

  // //componentDidMount
  // const unsubscribe = NetInfo.addEventListener(netInfo => console.log(netInfo));

  // //componentWillUnmount
  // unsubscribe();

  // better to use netInfo hook
  const netInfo = useNetInfo();

  // return <Button disabled={!netInfo.isInternetReachable} />

  const [firstName, setFirstName] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState(categories[0]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [imageUris, setImageUris] = useState([]);

  const [user, setUser] = useState();

  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  // useEffect(() => {
  //   restoreToken();
  // }, []);

  const demo = async () => {
    try {
      await AsyncStorage.setItem('person', JSON.stringify({ id: 1 }));
      const value = await AsyncStorage.getItem('person');
      const person = JSON.parse(value);
      console.log('person: ', person);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  // demo();


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
        onPress={() => navigation.navigate(routes.TWEET_DETAILS, { id: 1 })}
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
  const FeedNavigator = () => (
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
          headerShown: false,
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
    <Tab.Navigator
      // tabBarOptions={{
      //   activeBackgroundColor: 'tomato',
      //   activeTintColor: 'white',
      //   inactiveBackgroundColor: '#eee',
      //   inactiveTintColor: 'black',
      // }}
      screenOptions={{
        tabBarActiveBackgroundColor: 'tomato',
        tabBarActiveTintColor: 'white',
        tabBarInactiveBackgroundColor: '#eee',
        tabBarInactiveTintColor: 'black',
      }}

    >
      <Tab.Screen
        name='Feed'
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons
              color={color}
              name='home'
              size={size}
            />
        }}
      />
      <Tab.Screen
        name='Account'
        component={Account}
      />
    </Tab.Navigator>
  );

  if (!isReady)
    return <AppLoading
      onFinish={() => setIsReady(true)}
      startAsync={restoreUser}
      onError={console.log('error')}
    />;

  // const navigationRef = React.createRef(); 

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
        <StatusBar
          backgroundColor={colors.light}
          barStyle={'dark-content'}
        />
        {user ? <AppNavigator /> : <AuthNavigator />}
        {/* <StackNavigator /> */}
        {/* <TabNavigator /> */}
        {/* <AuthNavigator /> */}
        {/* <AppNavigator /> */}
      </NavigationContainer>
    </AuthContext.Provider>
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
