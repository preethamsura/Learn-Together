import React, {Component} from 'react'; 
import {View, Text, StyleSheet} from 'react-native';

/** FIX THIS COMMENT EVENTUALLY */
class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
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