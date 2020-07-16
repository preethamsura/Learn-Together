import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/LoginPage.js';
import LoadingScreen from './screens/LoadingPage.js';
import HomeScreen from './screens/HomePage.js';
import ProfileScreen from './screens/ProfilePage.js';
import SkillScreen from './screens/SkillPage.js'
import Settings from './screens/Settings'


import firebase from 'firebase';
import {firebaseConfig} from './config.js'

// Initializes the firebase so that the user can sign in.
firebase.initializeApp(firebaseConfig);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Loading" component={LoadingScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="LoginScreen" component={LoginScreen} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Skills" component={SkillScreen} />
    </Tab.Navigator>
  );
}

function Profile() {
  return(
    <Stack.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      {MyTabs()}
    </NavigationContainer>
  );
}

export default App;