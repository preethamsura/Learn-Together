import React, {Component} from 'react'; 
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../components/Colors.js';
import Button from '../components/Button.js'

/** FIX THIS COMMENT EVENTUALLY */
class Settings extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.topFiller}>
                </View>
            </View>
        )
    }
}

export default Settings;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.getBackgroundColor()
    },

    descriptionText: { 
        flex: 1, 
        fontSize: 26, 
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
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
    },

    Touch: {
        backgroundColor: 'lightblue',
        borderWidth: 2,
        borderColor: "#126FAE",
        borderRadius: 10,
        
        width: 90,
        
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