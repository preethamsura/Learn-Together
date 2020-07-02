import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button.js';

/** Default home screen for the app. What the user will see when they open
 * the app and login. Includes allowing the user to use the app as well as
 * leads to a settings page where they can change their preferences.
 */
class HomeScreen extends Component {
    render() {
      let backToLogin = Button.getTouchButton("Go Back", this.props.navigation.navigate, 'LoginScreen', backButtonStyle);
        return (
            <View style={styles.container}>
              {backToLogin}
              <Text style={styles.text}>
              Welcome to the home screen!
              </Text>
            </View>
        )
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex:2,
      alignItems: 'center',
      justifyContent: 'center'

    },
    header: {
      flex:1,
      paddingTop: 60,
      backgroundColor: '#5f9ea0',

    },
    text: {
      fontSize: 25,
    }
  });

  const backButtonStyle = StyleSheet.create({
    Touch: {
        backgroundColor: 'lightgrey',
        borderRadius: 20,
        padding: 12,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
      },

      ButtonView: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
      },

      ButtonText: {
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center', 
      }, 
});
