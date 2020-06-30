import React, {Component} from 'react'; 
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button.js';

/** Default home screen for the app. What the user will see when they open
 * the app and login. Includes allowing the user to use the app as well as 
 * leads to a settings page where they can change their preferences. 
 */
class HomeScreen extends Component {
    render() {
      let backToLogin = Button.getTouchButton("Go Back", this.props.navigation.navigate, 'LoginScreen');
        return (
            <View style={styles.container}>
              {backToLogin}
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