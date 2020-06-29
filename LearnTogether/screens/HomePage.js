import React, {Component} from 'react'; 
import {View, Text, StyleSheet} from 'react-native';

/** Default home screen for the app. What the user will see when they open
 * the app and login. Includes allowing the user to use the app as well as 
 * leads to a settings page where they can change their preferences. 
 */
class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.text}> 
              Welcome to the home screen! 
              </Text>
            </View>
        ) 
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent:'center'
     
    },
    header: {
      flex:1,
      paddingTop: 60,
      backgroundColor: '#5f9ea0',
  
    },
    text: {
      justifyContent: 'center',
      fontSize: 26
    }
  });