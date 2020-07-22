import React, {Component} from 'react'; 
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { SocialIcon } from 'react-native-elements';

/** Class which holds different types of buttons that can be used for this project.*/
class Buttons extends Component {
    /** Creates and returns a default touchable button which calls on a certain method. 
     * @param text = text which the button should display. Will be empty string if no method is passed in.
     * @param method = Method which the button should run on click
     * @param argument = Argument/arguments for the method if they are required.
     * @return = Button with all the necessary params set. 
    */
    getTouchButton = (text = "", method, argument = undefined, style = undefined) => {
      let styles;
      if (style != undefined) {
        styles = style
      } else {
        styles = defaultStyles
      }
        return (
          <TouchableOpacity style = {styles.Touch} onPress={() => method(argument)}>
          <View style={styles.ButtonView}> 
              <Text style={styles.ButtonText}>
                  {text}
                  </Text>
              </View>
          </TouchableOpacity>
          )
    }

    /** Creates and returns a default touchable button which calls on a certain method. 
     * @param text = text which the button should display. Will be empty string if no method is passed in.
     * @param navigate = Method which the button should run on click
     * @param parameter = Which screen to navigate to
     * @param options = Dictionary containing the options for the screen when navigated to. 
     * @param style = Style of the button.
     * @return = Button with all the necessary params set. 
    */
    getNavigateButton = (text = "", navigate, screenName, options, style = undefined) => {
      let styles;
      if (style != undefined) {
        styles = style
      } else {
        styles = defaultStyles
      }
        return (
          <TouchableOpacity style = {styles.Touch} onPress={() => navigate(screenName, options)}>
          <View style={styles.ButtonView}> 
              <Text style={styles.ButtonText}>
                  {text}
                  </Text>
              </View>
          </TouchableOpacity>
          )
    }

    /** Creates and returns a social icon button which can be used to represent different social medias networks.
     * @param text = text which the button should display. Will be empty string if no method is passed in.
     * @param buttonType = type of social media network that this button should represent
     * @param method = Method which the button should run on click
     * @param argument = Argument/arguments for the method if they are required.
     * @return = Social media button with the set parameters
    */
    getSocialButton = (text = "", buttonType = 'google', method, argument = undefined, style = undefined) => {
      let styles;
      if (style != undefined) {
        styles = style
      } else {
        styles = defaultStyles
      }
      return (
        <SocialIcon style = {styles.Touch}
            title= {text}
            button
            onPress={() => method(argument)}
            type= {buttonType}
          />
      )
    }
}

const Button = new Buttons();
export default Button;

const defaultStyles = StyleSheet.create({
    Touch: {
      borderRadius: 20,
      padding: 12,
      alignItems: 'center',
      width: 150,
      backgroundColor: 'lightgrey'
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