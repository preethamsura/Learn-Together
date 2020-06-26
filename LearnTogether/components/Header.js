import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Header = (props) => {
    return (
      <View style = {styles.header}>
        <Text style = {styles.text}> 
          {props.title}
        </Text>
      </View>
    )
  }
  Header.defaultProps = {
    title: 'Welcome to LearnTogether!'
  }
  const styles = StyleSheet.create({
    header: {
      height: 60,
      padding: 15,
      backgroundColor: 'grey',
    },
    text: {
        color: 'white',
        fontSize: 23,
        textAlign: 'center'
    }
    
  });
  export default Header;