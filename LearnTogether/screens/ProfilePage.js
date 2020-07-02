import React, {Component} from 'react'; 
import {View, StyleSheet, Image} from 'react-native';
import TextTypes from '../components/Text.js';
import Navigation from '../components/NavigationBar.js'

/** FIX THIS COMMENT EVENTUALLY */
class ProfileScreen extends Component {
    render() {

        let navigationBar = Navigation.getNavigationBar(this.props.navigation.navigate)
        let username = TextTypes.getDefaultText("Insert Username")
        let descriptionText = TextTypes.getDefaultText("Profile Description")

        return (
            <View style={styles.container}>
                <View style={styles.topFiller}>
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
                {navigationBar}
                <View style={styles.bottomFiller}>
                </View>
            </View>
        )
    }
}

export default ProfileScreen;

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
    
    contents: {
        flex: 23,
        backgroundColor: 'lightgrey',
        alignItems: 'center'
    },

    bottomFiller: {
        flex: .5,
        backgroundColor: 'lightgrey'
    },

    topFiller: {
        flex: 1,
        backgroundColor: 'lightgrey'
    },

    stretch: {
        width: 175,
        height: 125,
        resizeMode: 'cover',
        flex: .5
      }
  });