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
                    Signup with Google
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
  }

const styles = StyleSheet.create({
      Touch: {
          
          backgroundColor: 'cyan',
          borderBottomEndRadius: 10,
          borderBottomEndRadius: 10,
          borderWidth: 5,
          borderColor: '#00A2FF',
          borderRadius: 10,
          paddingTop: 30
          
      },
      ButtonView: {
          flexDirection: 'row',
          justifyContent: "space-between",
          alignItems: "center",

      },
      ButtonText: {
          fontSize: 18,
          alignItems: 'center',
          justifyContent: 'center', 
          borderBottomEndRadius: 10,
      }
});
