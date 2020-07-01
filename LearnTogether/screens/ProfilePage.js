import React, {Component} from 'react'; 
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button.js';
import TextTypes from '../components/Text.js'

/** FIX THIS COMMENT EVENTUALLY */
class ProfileScreen extends Component {
    render() {
        let backToLogin = Button.getTouchButton("Go Back", this.props.navigation.navigate, 'LoginScreen', styles);
        let welcomeText = TextTypes.getDefaultText("Welcome to the profile screen!")
        return (
            <View style={styles.container}>
                {backToLogin}
                {welcomeText}
            </View>
        ) 
    }
}

export default ProfileScreen;

const styles = StyleSheet.create({
    Touch: {
        backgroundColor: 'lightgrey',
        borderRadius: 20,
        padding: 12,
        width: 200,
        alignItems: 'center',
        position: 'absolute',
        bottom: 15,
        left: 0
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

    container: {
      flex: 2,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent:'center'
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