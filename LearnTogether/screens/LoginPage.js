import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
import Button from '../components/Button.js';
import {User} from '../backend/models/user.model'
import {gql} from 'apollo-boost';
import { Mutation } from 'react-apollo';

// Link to the firebase authentication client
const IOS_CLIENT_ID = "180684653564-384np6iorf773o9su3msm8c074n6hsbb.apps.googleusercontent.com"
const ANROID_CLIENT_ID = "180684653564-3soavmv4rd89i68mqm9460l3d3u3dsca.apps.googleusercontent.com"

const ADD_USER = gql`
  mutation userCreateOne($email: String!, $name: String!, $pfp: String!) {
    userCreateOne(email: $email, name: $name, pfp: $pfp) {
      email,
      name,
      pfp
    }
  }
`

/** Class which lets the user login to their account (currently only using google accounts). */
class LoginScreen extends Component {
    isUserEqual = (googleUser, firebaseUser) => {
      if (firebaseUser) {
        var providerData = firebaseUser.providerData;
        for (var i = 0; i < providerData.length; i++) {
          if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
              providerData[i].uid === googleUser.idToken) {
            // We don't need to reauth the Firebase connection.
            return true;
          }
        }
      }
      return false;
    }
    onSignIn = googleUser => {
      console.log('Google Auth Response', googleUser);
      // We need to register an Observer on Firebase Auth to make sure auth is initialized.
      var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          var credential = firebase.auth.GoogleAuthProvider.credential(
              googleUser.idToken,
              googleUser.accessToken);
          // Sign in with credential from the Google user.
          firebase.auth().signInWithCredential(credential).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
          });
        } else {
          console.log('User already signed-in Firebase.');
        }
      }.bind(this));
    }

  // Prompts the user to sign in with their gmail account
    signInWithGoogleAsync = async() => {
      // Just tells us if they clicked on the sign in button
      console.log('pressed');

      // Catches any errors just in case something goes wrong with signing in
      try {
        // Opens up the google sign in so the user can sign in
        const result = await Google.logInAsync({
          iosClientId: IOS_CLIENT_ID,
          androidClientId: ANROID_CLIENT_ID,
          scopes: ['profile', 'email'],
        });

        // If the sign in was successful, return an access token to the user,
        // else return that the user was unable to sign in.
        if (result.type === 'success') {
          console.log('success');
          this.sendUser(result.user)
          this.onSignIn(result);
          return result.accessToken;
        } else {
          console.log('failure')
          return { cancelled: true };
        }
      } catch (e) {
        return { error: true };
      }
    }

    sendUser = googleUser => {
      fetch("https://navup-learn-together.herokuapp.com/graphql", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": 'application/json',
        },
        body: JSON.stringify({
          ADD_USER, 
          variables: {
            email: googleUser.email,
            name: googleUser.name,
            pfp: googleUser.photoUrl
          }
        })
      }).then((response) => response.text()).then((responseJson) => {
        console.log(responseJson);
      })
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
