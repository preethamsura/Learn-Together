import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react'; 
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//import LoginButtons from '../components/LoginButtons.js';
import Header from '../components/Header.js';
import * as Google from 'expo-google-app-auth';

const IOS_CLIENT_ID = "180684653564-384np6iorf773o9su3msm8c074n6hsbb.apps.googleusercontent.com"

class LoginScreen extends Component {
    signInWithGoogleAsync = async() => {
      console.log('pressed');
      try {
        const result = await Google.logInAsync({
          // androidClientId: YOUR_CLIENT_ID_HERE,
          iosClientId: IOS_CLIENT_ID,
          scopes: ['profile', 'email'],
        });
        console.log(result);
        if (result.type === 'success') {
          console.log('success')
          return result.accessToken;
        } else {
          console.log('failure')
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
    Touch: {
      padding:15,
      backgroundColor: 'cyan',
      borderBottomEndRadius: 10,
      borderBottomEndRadius: 10,
      borderWidth: 5,
      borderColor: '#00A2FF',
      borderRadius: 10
      
    },
    ButtonView: {
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: "center",

    },
    ButtonText: {
      fontSize: 18,
      alignItems: 'center',
      justifyContent: 'center', 
      borderBottomEndRadius: 10,
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