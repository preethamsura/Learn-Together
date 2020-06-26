import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react'; 
import {View, Text, StyleSheet} from 'react-native';
import LoginButtons from '../components/LoginButtons.js';
import Header from '../components/Header.js';

class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.header}>
            <Header />
            <View style={styles.container}>
                <LoginButtons/>
              <StatusBar style="auto" />
            </View>
          </View>
        ) 
    }
}

export default LoginScreen;

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