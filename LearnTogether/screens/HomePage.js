import React, {Component} from 'react'; 
import {View, Text, StyleSheet} from 'react-native';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text> Welcome! </Text>
            </View>
        ) 
    }
}

export default HomeScreen;

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