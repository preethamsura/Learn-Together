import React, {Component} from 'react'; 
import {View, Text, StyleSheet, Image} from 'react-native';
import Button from '../components/Button.js';
import TextTypes from '../components/Text.js';

/** FIX THIS COMMENT EVENTUALLY */
class ProfileScreen extends Component {
    render() {
        let backToLogin = Button.getTouchButton("Go Back", this.props.navigation.navigate, 'LoginScreen', backButtonStyle);
        let goToHome = Button.getTouchButton("Home", this.props.navigation.navigate, 'HomeScreen', backButtonStyle);
        let profile = Button.getTouchButton("Profile", this.props.navigation.navigate, 'ProfileScreen', backButtonStyle);
        let username = TextTypes.getDefaultText("Insert Username")
        let descriptionText = TextTypes.getDefaultText("Profile Description")
        return (
            <View style={styles.container}>
                <View style={styles.filler}>
                </View>
                <View style = {styles.contents}>
                    <View style = {styles.username}>
                        {username}
                    </View>
                    <Image
                        style={styles.stretch}
                        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                    />
                    <View style = {styles.descriptionText}>
                        {descriptionText}
                    </View>
                </View>
                <View style={styles.bottomBar}>
                    {backToLogin}
                    {goToHome}
                    {profile}
                </View>
                <View style={styles.filler}>
                </View>
            </View>
        )
    }
}

export default ProfileScreen;

const backButtonStyle = StyleSheet.create({
    Touch: {
        backgroundColor: 'lightblue',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#126FAE",
        
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
    },

    descriptionText: { 
        flex: 1, 
        fontSize: 26, 
        alignItems: 'center',
        justifyContent: 'center',
    },

    bottomBar: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        justifyContent: "space-between",
    },
    
    contents: {
        flex: 23,
        backgroundColor: 'lightgrey',
        alignItems: 'center'
    },

    filler: {
        flex: .5,
        backgroundColor: 'lightgrey'
    },

    stretch: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
      }
  });