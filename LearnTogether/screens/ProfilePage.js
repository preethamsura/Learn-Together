import React, {Component} from 'react'; 
import {View, StyleSheet, Image, Text} from 'react-native';
import Navigation from '../components/NavigationBar.js';
import Colors from '../components/Colors.js';
import Button from '../components/Button.js';

/** FIX THIS COMMENT EVENTUALLY */
class ProfileScreen extends Component {
    render() {
        let navigate = this.props.navigation.navigate
        let navigationBar = Navigation.getNavigationBar(navigate);
        let options = Button.getTouchButton("Settings", navigate, "Settings", settingsStyles);

        return (
            <View style={styles.container}>
                <View style={styles.topFiller}>
                </View>
                <View style = {styles.contents}>
                    <View style = {styles.contentsTop}> 
                        {options}
                    </View>
                    <View style = {styles.contentsBottom}>
                        <Image
                            style={styles.stretch}
                            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                        />
                        <View style = {styles.username}>
                            <Text style = {styles.usernameText}> 
                                Username 
                            </Text>
                        </View>
                        <View style = {styles.belowUsername}>
                            <View style={styles.filler}>
                            </View>
                            <Text style = {styles.descriptionText}>
                                This is some default description text for this page.
                            </Text>
                            <Text style = {styles.badgeLocation}>
                                This is where we would put the badges 
                            </Text>
                            <Text style = {styles.currentSkills}>
                                This is where we would put current skills
                            </Text>
                        </View>
                    </View>
                </View>
                {navigationBar}
                <View style={styles.filler}>
                </View>
            </View>
        )
    }
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.getBackgroundColor()
    },

    username: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    belowUsername: { 
        flex: 1,
        fontSize: 23, 
        width: "90%",
        justifyContent: 'flex-start',
    },
    
    contents: {
        flex: 23,
    },

    filler: {
        flex: .5,
    },

    topFiller: {
        flex: 1,
        backgroundColor: 'black'
    },

    contentsTop: {
        flex: .2,
        justifyContent: 'center',
    },

    contentsBottom: {
        flex: 2,
        alignItems: 'center',
    },

    stretch: {
        width: 175,
        height: 125,
        resizeMode: 'cover',
        flex: .5,
        borderRadius: 75,
      },

    usernameText: {
        fontSize: 26,
    },

    descriptionText: {
        flex: 1.5,
        fontSize: 20,
        alignSelf: 'flex-start',
        backgroundColor: 'yellow'
    },

    badgeLocation: {
        flex: 1.5,
        fontSize: 20,
        alignSelf: 'flex-start',
        backgroundColor: 'green'
    },

    currentSkills: {
        flex: 5,
        fontSize: 21,
        backgroundColor: "blue"
    }

  });

  const settingsStyles = StyleSheet.create({
    Touch: {
        backgroundColor: 'lightgrey',
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 15,
        
        width: 125,
        
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end'
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
      }, 
});