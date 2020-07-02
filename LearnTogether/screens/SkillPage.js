import React, {Component} from 'react'; 
import {View, StyleSheet, Image} from 'react-native';
import TextTypes from '../components/Text.js';
import Navigation from '../components/NavigationBar.js'

/** FIX THIS COMMENT EVENTUALLY */
class SkillScreen extends Component {
    render() {

        let navigationBar = Navigation.getNavigationBar(this.props.navigation.navigate)
        let descriptionText = TextTypes.getDefaultText("Skill Screen")

        return (
            <View style={styles.container}>
                <View style={styles.topFiller}>
                </View>
                <View style = {styles.contents}>
                  {descriptionText}
                </View>
                {navigationBar}
                <View style={styles.bottomFiller}>
                </View>
            </View>
        )
    }
}

export default SkillScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
  });