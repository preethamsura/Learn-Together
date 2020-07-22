import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../components/Colors.js';

/** FIX THIS COMMENT EVENTUALLY */
function SkillCategories({route, navigation}) {

  // Title of the current screen should be other person.
  const { title } = route.params;
  navigation.setOptions({ title: title });

  return (
      <View style={styles.container}>
          <View style = {styles.contents}>

          </View>
      </View>
  )
}

export default SkillCategories;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.getBackgroundColor(),
      alignItems: 'stretch'
    },

    descriptionText: { 
        flex: 1, 
        fontSize: 26, 
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    
    contents: {
        flex: 23,
        alignItems: 'stretch'
    },

    bottomFiller: {
        flex: .5,
        backgroundColor: 'lightgrey'
    },

    topFiller: {
        flex: 1,
        backgroundColor: 'lightgrey',
    },
  });