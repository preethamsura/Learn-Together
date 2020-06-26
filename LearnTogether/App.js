import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';
import Header from './components/Header.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Button 
          style={{justifyContent: 'center', alignItems:'center'}}
          title = "Login"
          onPress={() => Alert.alert("Hello")}
      />
      <Button
            title="Sign up"
            onPress={() => Alert.alert("Hello")}
          />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: '#5f9ea0',
    alignItems: 'center',
   
  },
  text: {
    justifyContent: 'center',
    fontSize: 23
    
  }
});
