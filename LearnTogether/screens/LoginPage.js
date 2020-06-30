import React, {Component} from 'react'; 
import {View, StyleSheet} from 'react-native';
import * as Google from 'expo-google-app-auth';
import Button from '../components/Button.js';

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
        console.log(result);

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
      let touch = Button.getTouchButton

      // Creates the 3 current buttons which are being used on the home screen.
      let signInButton  = touch("Sign in with Google", this.signInWithGoogleAsync);
      let homeScreenButton = touch("Go To Home Screen", this.props.navigation.navigate, 'HomeScreen');
      let profileScreenButton = touch("Go To Profile Screen", this.props.navigation.navigate, 'ProfileScreen');
      return (
        // Creates the view with all the buttons that are needed
        <View style = {styles.view}>
          {signInButton}
          {homeScreenButton}
          {profileScreenButton}
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
    view: {
      marginTop: 330,
      alignContent: 'center',
      alignItems: 'center',
      
    }
  });