import React, {Component} from 'react'; 
import {View, StyleSheet} from 'react-native';
import TextTypes from '../components/Text.js';
import Navigation from '../components/NavigationBar.js';
import Colors from '../components/Colors.js';
import Lists from '../components/Lists';

/** FIX THIS COMMENT EVENTUALLY */
class HomeScreen extends Component {

    /** Return the list of all current chats which this person has. */
    getChatLists = () => {
        return (
            [
                {
                    name: 'Uthman Momen',
                    avatar_url: 'https://reactnative.dev/img/tiny_logo.png',
                    subtitle: 'UC Berkeley'
                },
                {
                    name: 'Preetham Sura',
                    avatar_url: 'https://reactnative.dev/img/tiny_logo.png',
                    subtitle: 'UC Berkeley'
                },
                {
                    name: 'Asim Biswal',
                    avatar_url: 'https://reactnative.dev/img/tiny_logo.png',
                    subtitle: 'UC Berkeley'
                },
                {
                    name: 'Nikhil Padavala',
                    avatar_url: 'https://reactnative.dev/img/tiny_logo.png',
                    subtitle: 'UC Berkeley'
                },
                {
                    name: 'Vikram Narendar',
                    avatar_url: 'https://reactnative.dev/img/tiny_logo.png',
                    subtitle: 'UC Merced'
                },
              ]
        )
    }

    getSkillLists = () => {
        return (
            [
                {
                    name: 'React Native',
                    avatar_url: 'https://reactnative.dev/img/tiny_logo.png',
                    subtitle: 'UC Berkeley'
                },
                {
                    name: 'Crappy Python Class',
                    avatar_url: 'https://reactnative.dev/img/tiny_logo.png',
                    subtitle: 'Stanford'
                },
              ]
        )
    }

    render() {
        let getText = TextTypes.getDefaultText;
        
        let chatText = getText("Chats");
        let chatLists = Lists.getListItem(this.getChatLists(), undefined, this.props.navigation);
        let skillText = getText("Current Skills");
        let skillLists = Lists.getListItem(this.getSkillLists(), undefined, this.props.navigation);

        return (
            <View style={styles.container}>
                <View style={styles.topFiller}>
                </View>
                <View style = {styles.contents}>
                  {chatText}
                  {chatLists}

                  <View style = {styles.topFiller}>
                  </View>
                  
                  {skillText}
                  {skillLists}
                </View>
                <View style={styles.bottomFiller}>
                </View>
            </View>
        )
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.getBackgroundColor()
    },

    descriptionText: { 
        flex: 1, 
        fontSize: 26, 
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    
    contents: {
        flex: 23,
        alignItems: 'center',
    },

    bottomFiller: {
        flex: .5,
    },

    topFiller: {
        flex: 1,
        backgroundColor: 'lightgrey',
    },
  });