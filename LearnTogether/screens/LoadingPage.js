import React, {Component} from 'react'; 
import {View, Text, StyleSheet, Button} from 'react-native';

class LoadingScreen extends Component {
    render() {
        return (
          <View>
            <Text> Loading... </Text>
          </View>
        ) 
    }
}

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#5f9ea0',
      alignItems: 'center',
     
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