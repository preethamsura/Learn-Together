import React, {Component} from 'react'; 
import {View, StyleSheet, Image, Text} from 'react-native';
import Colors from '../components/Colors.js';
import Button from '../components/Button.js';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


/** FIX THIS COMMENT EVENTUALLY */
class ProfileScreen extends Component {

    /** FIXME
     * @param response 
     */
    setResponse = (response) => {
        this.responseData = response
        console.log(this.responseData)
    }

    /** FIXME
     * @param username = USER_EMAIL 
     */
    setup = (username) => {
        let USER_SCHEMA = `{
            userByEmail($email:String!) {
                userByEmail(email: $email) {
                    id,
                    name,
                    skills_completed,
                    skill_interested,
                    friends
                }
            }
        }`
        this.getuser(username, USER_SCHEMA)
    }

    /** FIXME  
     * @param username = USER_EMAIL
     */
    getuser = (username, USER_SCHEMA) => {
        fetch("http://10.0.0.125:5000/graphql", {
            method: 'POST',
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            query: USER_SCHEMA,
            variables: {username}
            }),
        }).then((response) => response.text()).then((response) => {
            this.setResponse(response);
        })
    }

    /** COMMENT THIS FUNCTION */
    ProfileScreen = () => { 
        let navigate = this.props.navigation.navigate
        let options = Button.getTouchButton("Settings", navigate, "Settings", settingsStyles);

        //this.setup(USER_EMAIL);
        const url = 'https://reactnative.dev/img/tiny_logo.png';

        console.log(global.USER_EMAIL)

        return (
            <View style={styles.container}>
                <View style = {styles.topFiller}>
                </View>
                <View style = {styles.contents}>
                    <View style = {styles.contentsTop}> 
                        {options}
                    </View>
                    <View style = {styles.contentsBottom}>
                        <Image
                            style={styles.stretch}
                            source={{uri: url}}
                        />
                        <View style = {styles.username}>
                            <Text style = {styles.usernameText}> 
                                {global.USER_EMAIL}
                            </Text>
                        </View>
                        <View style = {styles.belowUsername}>
                            <View style={styles.filler}>
                            </View>
                            <Text style = {styles.descriptionText}>
                                This is some default description text for this page.
                            </Text>
                            <Text style = {styles.badgeLocation}>
                                This is where we would put the badges 
                            </Text>
                            <Text style = {styles.currentSkills}>
                                This is where we would put current skills
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.filler}>
                </View>
            </View>
        )
    }
    
    render() {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }} >
                <Stack.Screen name="Profile" component={this.ProfileScreen} />
            </Stack.Navigator>
        )
    }
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.getBackgroundColor()
    },

    username: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    belowUsername: { 
        flex: 1,
        fontSize: 23, 
        width: "90%",
        justifyContent: 'flex-start',
    },
    
    contents: {
        flex: 23,
    },

    filler: {
        flex: .5,
    },

    topFiller: {
        flex: 1,
        backgroundColor: 'lightgrey'
    },

    contentsTop: {
        flex: .2,
        justifyContent: 'center',
    },

    contentsBottom: {
        flex: 2,
        alignItems: 'center',
    },

    stretch: {
        width: 175,
        height: 125,
        resizeMode: 'cover',
        flex: .5,
        borderRadius: 75,
      },

    usernameText: {
        fontSize: 26,
    },

    descriptionText: {
        flex: 1.5,
        fontSize: 20,
        alignSelf: 'flex-start',
        backgroundColor: 'yellow'
    },

    badgeLocation: {
        flex: 1.5,
        fontSize: 20,
        alignSelf: 'flex-start',
        backgroundColor: 'green'
    },

    currentSkills: {
        flex: 5,
        fontSize: 21,
        backgroundColor: "blue"
    }

  });

  const settingsStyles = StyleSheet.create({
    Touch: {
        backgroundColor: 'lightgrey',
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 15,
        
        width: 125,
        
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end'
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
      }, 
});