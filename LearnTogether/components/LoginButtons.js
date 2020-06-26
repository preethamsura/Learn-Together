import React from 'react';
import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const LoginButtons = () => {
    return (
        <View>
        <TouchableOpacity style = {styles.Touch}>
            <View style={styles.ButtonView}>
            <Text style={styles.ButtonText} >
                Login
            </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.Touch}>
            <View style={styles.ButtonView}>
                <Text style={styles.ButtonText} >
                    Signup
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
  }

  const styles = StyleSheet.create({
      Touch: {
          padding:15,
          backgroundColor: 'cyan',
          borderBottomWidth: 5,
          borderColor: '#00A2FF'
          
      },
      ButtonView: {
          flexDirection: 'row',
          justifyContent: "space-between",
          alignItems: "center",
      },
      ButtonText: {
          fontSize: 18
      }

    
  });
  export default LoginButtons;