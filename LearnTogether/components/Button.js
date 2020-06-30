import React, {Component} from 'react'; 
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

/** Class which holds different types of buttons that can be used for this project.*/
class Buttons extends Component {
    /** Creates and returns a default touchable button which calls on a certain method. 
     * @param text = text which the button should display. Will be empty string if no method is passed in.
     * @param method = Method which the button should run on click
     * @param argument = Argument/arguments for the method if they are required.
     * @return = Button with all the necessary params set. 
    */
    getTouchButton = (text = "", method, argument = undefined) => {
        return (<TouchableOpacity style = {styles.Touch} onPress={() => method()}>
        <View style={styles.ButtonView}> 
            <Text style={styles.ButtonText}>
                {text}
                </Text>
            </View>
        </TouchableOpacity>)
    }
}

const Button = new Buttons();
export default Button;

const styles = StyleSheet.create({
    Touch: {
      backgroundColor: 'lightgrey',
      borderRadius: 20,
      padding: 12,
      width: 300,
      alignItems: 'center'
    },
    ButtonView: {
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: "center",

    },
    ButtonText: {
      fontSize: 25,
      alignItems: 'center',
      justifyContent: 'center', 
      borderBottomEndRadius: 10,
    }, 
  });