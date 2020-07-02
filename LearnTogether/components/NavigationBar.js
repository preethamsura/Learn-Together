import React, {Component} from 'react'; 
import {View, StyleSheet,} from 'react-native';
import Button from './Button.js';

class NavigationBarClass extends Component {
    getNavigationBar = (navigate = undefined) => {
        let touch = Button.getTouchButton;

        let backToLogin = touch("Go Back", navigate, 'LoginScreen', styles);
        let goToHome = touch("Home", navigate, 'HomeScreen', styles);
        let goToProfile = touch("Profile", navigate, 'ProfileScreen', styles);
        let goToSkill = touch("Skills", navigate, 'SkillScreen', styles);

        return (
            <View style={styles.bottomBar}>
                    {backToLogin}
                    {goToHome}
                    {goToProfile}
                    {goToSkill}
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
        backgroundColor: 'lightgrey',
        justifyContent: "space-around",
    },
});