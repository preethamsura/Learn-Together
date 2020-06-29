import React, {Component} from 'react'; 
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as Google from 'expo-google-app-auth';

// Link to the firebase authentication client
const IOS_CLIENT_ID = "180684653564-384np6iorf773o9su3msm8c074n6hsbb.apps.googleusercontent.com"

/** Class which lets the user login to their account (currently only using google accounts). */
class LoginScreen extends Component {

  // Prompts the user to sign in with their gmail account
    signInWithGoogleAsync = async() => {
      // Just tells us if they clicked on the sign in button
      console.log('pressed');
      
      // Catches any errors just in case something goes wrong with signing in
      try {
        // Opens up the google sign in so the user can sign in
        const result = await Google.logInAsync({
          // androidClientId: YOUR_CLIENT_ID_HERE,
          iosClientId: IOS_CLIENT_ID,
          scopes: ['profile', 'email'],
        });

        // If the sign in was successful, return an access token to the user,
        // else return that the user was unable to sign in.
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

    // Creates the loading screen which only has one button which allows the user to login
    // to the app using google.
    render() {
        return (
          // Creates a button with the text "Sign in with Google" which prompts a google sign in.
          <View style = {styles.view}>
          <TouchableOpacity style = {styles.Touch} onPress={() => this.signInWithGoogleAsync()}>
              <View style={styles.ButtonView}> 
                  <Text style={styles.ButtonText}>
                      Sign in with Google
                      </Text>
                  </View>
              </TouchableOpacity>

            <TouchableOpacity style = {styles.Touch} onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <View style={styles.ButtonView}> 
                  <Text style={styles.ButtonText}>
                      Go To Home Screen
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
      backgroundColor: 'black',
      alignItems: 'center',
    },
    Touch: {
      backgroundColor: 'lightgrey',
      borderRadius: 20,
      padding: 12,
      width: 300,
      alignItems: 'center'
    },
    ButtonView: {
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: "center",

    },
    ButtonText: {
      fontSize: 25,
      alignItems: 'center',
      justifyContent: 'center', 
      borderBottomEndRadius: 10,
    }, 
    view: {
      marginTop: 330,
      alignContent: 'center',
      alignItems: 'center',
      
    }
    
  });