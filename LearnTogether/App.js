/* import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import LoginScreen from './screens/LoginPage.js';
import LoadingScreen from './screens/LoadingPage.js';
import HomeScreen from './screens/HomePage.js';
import ProfileScreen from './screens/ProfilePage.js';
import SkillScreen from './screens/SkillPage.js'
import Settings from './screens/Settings.js'

import firebase from 'firebase';

import {firebaseConfig} from './config.js'
import ChatScreen from './screens/ChatConstructor.js';

// Initializes the firebase so that the user can sign in.
firebase.initializeApp(firebaseConfig);
*/


/** Initial file which is ran which starts the firebase and takes the user to the 
 * loading screen. 
 */
/*export default class App extends React.Component {
  render() {
    // Initializes the app with the navigator. The default page which is ran
    // first is the loading screen which runs the rest. 
    return <AppNavigator />;
  };
}

// Creates a navigator which can be used to switch between the screens of the app.
const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen:LoginScreen,
  HomeScreen:HomeScreen,
  ProfileScreen:ProfileScreen,
  SkillScreen:SkillScreen,
  Settings:Settings,
  ChatScreen:ChatScreen,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);
*/

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;