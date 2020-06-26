import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import LoginScreen from './screens/LoginPage.js';
import LoadingScreen from './screens/LoadingPage.js';
import HomeScreen from './screens/HomePage.js';

import * as firebase from 'firebase';

import {firebaseConfig} from './config.js'
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  };
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen:LoginScreen,
  HomeScreen:HomeScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#5f9ea0',
    alignItems: 'center',
   
  },
  header: {
    flex:1,
    paddingTop: 60,
    backgroundColor: '#5f9ea0',

  },
  text: {
    justifyContent: 'center',
    fontSize: 26
    
  }
});
