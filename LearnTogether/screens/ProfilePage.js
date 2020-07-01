import React, {Component} from 'react'; 
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button.js';
import TextTypes from '../components/Text.js';

/** FIX THIS COMMENT EVENTUALLY */
class ProfileScreen extends Component {
    render() {
        let backToLogin = Button.getTouchButton("Go Back", this.props.navigation.navigate, 'LoginScreen', backButtonStyle);
        let goToHome = Button.getTouchButton("Home", this.props.navigation.navigate, 'HomeScreen', backButtonStyle);
        let username = TextTypes.getDefaultText("Insert Username")
        let descriptionText = TextTypes.getDefaultText("Profile Description")
        return (
            <View style={styles.container}>
                <View style = {styles.contents}>
                    <View style = {styles.username}>
                        {username}
                    </View>
                    <View style = {styles.descriptionText}>
                        {descriptionText}
                    </View>
                </View>
                <View style={styles.bottomBar}>
                    {backToLogin}
                    {goToHome}
                </View>
            </View>
        )
    }
}

export default ProfileScreen;

const backButtonStyle = StyleSheet.create({
    Touch: {
        flex: 1,
        backgroundColor: 'white',
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    username: {
        alignItems: 'center',
        justifyContent: 'center', 
        top: 20
    },

    descriptionText: { 
        flex: 1, 
        fontSize: 26, 
        alignItems: 'center',
        justifyContent: 'center',
    },

    bottomBar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'lightgrey'
    },
    
    contents: {
        flex: 11,
        backgroundColor: 'lightgrey',
    }
  });