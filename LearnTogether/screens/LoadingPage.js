import React, {Component} from 'react'; 
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import firebase from 'firebase'

/** Class for the loading screen right when the user opens the app. Should either
 * navigate the user to the LoginScreen if the user has not logged into an account
 * or it will navigate the user to the HomeScreen of the app where they can begin
 * to use the app.
 */
class LoadingScreen extends Component {
    // Loads data from firebase once this component is added to the working tree
    componentDidMount() {
        this.checkIfLoggedIn();
    }

    // Checks to see if the current user is already logged in or not,
    // if they are logged in, go to the homescreen, else go to the loginscreen
    checkIfLoggedIn = () => {
      firebase.auth().onAuthStateChanged(
        function(user) {
          if(user) {
              this.props.navigation.navigate('HomeScreen');
          } else {
              this.props.navigation.navigate('LoginScreen');
          }
        }.bind(this)
      );
    };
    
    // Default image for the loading page. Currently the loading screen is
    // just a white background with the a circle indicating loading at the center
    // of the screen.
    render() {
      return (
        <View style={styles.activityContainer}>
          <ActivityIndicator size="large"/>
        </View>
      );
    }
}

export default LoadingScreen;

const styles = StyleSheet.create({
    activityContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
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
  });