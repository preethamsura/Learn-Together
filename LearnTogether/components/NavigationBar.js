import React, {Component} from 'react'; 
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Button from './Button.js';

/** Class which holds the navigation bar info. Can call getNavigationBar to get the 
 * navigation bar to be used in a screen.
 */
class NavigationBarClass extends Component {
    
    /** Creates and returns navigation bar. 
     * @param navigate = Method which is used by other classes to navigate between screens.
     * @return = Returns the navigation bar. 
    */
    getNavigationBar = (navigate = undefined) => {
        // Convenience
        let touch = Button.getTouchButton;

        // Creates the buttons which allow you to navigate from screen to screen
        let backToLogin = touch("Login", navigate, 'LoginScreen', styles);
        let goToHome = touch("Home", navigate, 'HomeScreen', styles);
        let goToProfile = touch("Profile", navigate, 'ProfileScreen', styles);
        let goToSkill = touch("Skills", navigate, 'SkillScreen', styles);
        let goToChat = touch("Chat", navigate, ["ChatScreen", {name: "Preetham"}], styles)

        // Creates and returns the navigation bar with evenly spaced buttons
        return (
            <View style={styles.bottomBar}>
                    {backToLogin}
                    {goToHome}
                    {goToProfile}
                    {goToSkill}
                    <TouchableOpacity style = {styles.Touch} onPress={() => navigate("ChatScreen", {name: "Preetham"})}>
                      <View style={styles.ButtonView}> 
                          <Text style={styles.ButtonText}>
                              Chat
                              </Text>
                          </View>
                      </TouchableOpacity>
                </View>
        )
    }
}

const NavigationBar = new NavigationBarClass();
export default NavigationBar;

const styles = StyleSheet.create({
    Touch: {
        backgroundColor: 'lightblue',
        borderWidth: 2,
        borderColor: "#126FAE",
        borderRadius: 10,
        
        width: 90,
        
        alignItems: 'center',
        justifyContent: 'center',
      },

      ButtonView: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
      },

      ButtonText: {
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center', 
      }, 

      bottomBar: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: "space-around",
    },
});