import React, {Component} from 'react'; 
import {View, StyleSheet} from 'react-native';
import TextTypes from '../components/Text.js';
import Navigation from '../components/NavigationBar.js';
import Colors from '../components/Colors.js';

/** FIX THIS COMMENT EVENTUALLY */
class HomeScreen extends Component {
    render() {

        let navigationBar = Navigation.getNavigationBar(this.props.navigation.navigate);
        let descriptionText = TextTypes.getDefaultText("Home Screen");

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