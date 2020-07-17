import React, {Component} from 'react'; 
import {View, StyleSheet} from 'react-native';
import TextTypes from '../components/Text.js';
import Navigation from '../components/NavigationBar.js';
import Colors from '../components/Colors.js';

/** FIX THIS COMMENT EVENTUALLY */
function SkillConstructor({route, navigation}) {
    // Title of the current screen should be other person.
    const { title } = route.params;
    navigation.setOptions({ title: title });

    return (
        <View style={styles.container}>
            <View style = {styles.contents}>
            </View>
            <View style={styles.bottomFiller}>
            </View>
        </View>
    )
}

export default SkillConstructor;

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
        alignItems: 'center'
    },

    bottomFiller: {
        flex: .5,
    },

    topFiller: {
        flex: 1,
        backgroundColor: 'lightgrey',
    },
  });