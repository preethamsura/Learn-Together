import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginPage.js';
import HomeScreen from './screens/HomePage.js';
import ProfileScreen from './screens/ProfilePage.js';
import SkillScreen from './screens/SkillPage.js'


import firebase from 'firebase';
import {firebaseConfig} from './config.js'

// Initializes the firebase so that the user can sign in.
firebase.initializeApp(firebaseConfig);

const Tab = createBottomTabNavigator();

global.USER_EMAIL = 'Test';
let loggedIn = false;

/** ADD A COMMENT */
function MyTabs() {
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
      {MyTabs()}
    </NavigationContainer>
  );
}

export default App;