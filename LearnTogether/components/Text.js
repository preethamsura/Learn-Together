import React, {Component} from 'react'; 
import {Text, StyleSheet} from 'react-native';

/** Class which holds different text components which will be used for this project. */
class Texts extends Component {
    /** Returns a default text box with font size 26.
     * @param text = Text which should go inside the text box. Empty string for no parameter passed in.
     * @return = Returns a text box with the string of text in it. 
     */
    getDefaultText = (text = '') => {
        return (
        <Text style={styles.text}> 
            {text}
        </Text>
        )
    }
}

const TextTypes = new Texts();
export default TextTypes;

const styles = StyleSheet.create({
    text: {
        justifyContent: 'center',
        fontSize: 26
      }
  });