import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginPage.js';
import HomeScreen from './screens/HomePage.js';
import ProfileScreen from './screens/ProfilePage.js';
import SkillScreen from './screens/SkillPage.js'
import Settings from './screens/Settings.js';
import ChatScreen from './screens/ChatConstructor.js';
import SkillConstructor from './screens/SkillConstructor.js';
import SkillCategories from './screens/SkillCategories.js'

import firebase from 'firebase';
import {firebaseConfig} from './config.js'

// Initializes the firebase so that the user can sign in.
firebase.initializeApp(firebaseConfig);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

global.USER_EMAIL = 'Test';
let loggedIn = false;

/** ADD A COMMENT */
function AppScreens() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="LoginScreen" component={LoginScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Skills" component={SkillScreen} />
    </Tab.Navigator>
  );
}

/** ADD A COMMENT */
checkIfLoggedIn = () => {
  firebase.auth().onAuthStateChanged(
    function(user) {
      if(user) {
          global.USER_EMAIL = user.email;
          loggedIn = true;
      } else {
      }
    }.bind(this)
  );
};

/** ADD A COMMENT */
function App() {
  checkIfLoggedIn();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Go Back"
          component={AppScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Settings" component = {Settings}/>
        <Stack.Screen 
          name="Chat" 
          component = {ChatScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen 
          name="SkillCategories" 
          component = {SkillCategories}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;