import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react'; 
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//import LoginButtons from '../components/LoginButtons.js';
import Header from '../components/Header.js';


class LoginScreen extends Component {
    signInWithGoogleAsync = async() => {
      try {
        const result = await Google.logInAsync({
          // androidClientId: YOUR_CLIENT_ID_HERE,
          behavior: "web",
          iosClientId: 576039292842-tekvatilmrad7cqo88psk1n74pjt9isr.apps.googleusercontent.com,
          scopes: ['profile', 'email'],
        });
    
        if (result.type === 'success') {
          return result.accessToken;
        } else {
          return { cancelled: true };
        }
      } catch (e) {
        return { error: true };
      }
    }

    render() {
        return (
          <View>
          <TouchableOpacity style = {styles.Touch}>
              <View style={styles.ButtonView}>
              <Text style={styles.ButtonText} >
                  Login
              </Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.Touch} onPress={() => this.signInWithGoogleAsync()}>
              <View style={styles.ButtonView}> 
                  <Text style={styles.ButtonText}>
                      Signup with Google
                      </Text>
                  </View>
              </TouchableOpacity>
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
      
    },
    ButtonText: {
      fontSize: 18,
      alignItems: 'center',
      justifyContent: 'center', 
      borderBottomEndRadius: 10,
    }
  });