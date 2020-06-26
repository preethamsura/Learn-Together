import React, {Component} from 'react'; 
import {View, Text, StyleSheet, Button, ActivityIndicator} from 'react-native';
import firebase from 'firebase'

class LoadingScreen extends Component {
    componentdDidMount() {
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn = () => {
      firebase.auth().onAuthStateChanged(
        function(user) {
          if(user) {
              this.prop.navigation.navigate('HomeScreen');
          } else {
              this.props.navigation.navigate('LoginScreen');
          }
        }.bind(this)
      );
    };
    
    render() {
      return (
        <View style={styles.activityContainer}>
          <ActivityIndicator size="large"/>
        </View>
      );
    }
}

export default LoadingScreen;

const styles = StyleSheet.create({
    activityContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
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