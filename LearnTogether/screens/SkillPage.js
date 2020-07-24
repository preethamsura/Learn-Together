import React, {Component} from 'react'; 
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import TextTypes from '../components/Text.js';
import Colors from '../components/Colors.js';
import Lists from '../components/Lists.js'
import Button from '../components/Button.js'

/** FIX THIS COMMENT EVENTUALLY */
class SkillScreen extends Component {
      /**
       * Default categories in the skill screen.
       */
      getDefaultCategories = () => {
          return (
              [
                {
                    rightElement: "Sports",
                    leftElement: "Math",
                },
                {
                    rightElement: "Coding",
                    leftElement: "Art",
                },
                {
                    rightElement: "Gaming",
                    leftElement: "Other",
                },
            ]
          )
      }

    render() {
        let descriptionText = TextTypes.getDefaultText("Search for New Skills");
        let navigate = this.props.navigation.navigate
        let searchNav = Button.getTouchButton("Search", navigate, "Search", settingsStyles);

        return (
            <View style={styles.container}>
                <View style={styles.topFiller}>
                </View>
                <View style={styles.screenTop}>
                    {descriptionText}
                    {searchNav}
                </View>
                <View style = {styles.contents}>
                        {Lists.getSkillBoxList(this.getDefaultCategories(), navigate, "SkillCategories")}
                </View>
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
      backgroundColor: Colors.getBackgroundColor()
    },

    descriptionText: { 
        flex: 1, 
        fontSize: 26, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    contents: {
        flex: 23,
        alignItems: 'stretch',
    },

    bottomFiller: {
        flex: .5,
    },

    topFiller: {
        flex: 1,
        backgroundColor: 'lightgrey',
    },

    searchBar: {
        backgroundColor: 'white',
    },

    screenTop: {
        flex: 1.5,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
  });

  const settingsStyles = StyleSheet.create({
    Touch: {
        backgroundColor: 'lightgrey',
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 15,
        
        width: 70,
        
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
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center', 
      }, 
});