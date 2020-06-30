import React, {Component} from 'react'; 
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button.js';

/** FIX THIS COMMENT EVENTUALLY */
class ProfileScreen extends Component {
    render() {
        let backToLogin = Button.getTouchButton("Go Back", this.props.navigation.navigate, 'LoginScreen');
        return (
            <View style={styles.container}>
                {backToLogin}
              <Text style={styles.text}> 
              Welcome to the profile screen! 
              </Text>
            </View>
        ) 
    }
}

export default ProfileScreen;

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