import React, {Component} from 'react'; 
import {View, StyleSheet} from 'react-native';
import TextTypes from '../components/Text.js';
import Navigation from '../components/NavigationBar.js';
import Colors from '../components/Colors.js';
import { ListItem } from 'react-native-elements'

/** FIX THIS COMMENT EVENTUALLY */
class HomeScreen extends Component {
    render() {
        const list = [
            {
              name: 'Uthman Momen',
              avatar_url: 'https://reactnative.dev/img/tiny_logo.png',
              subtitle: 'Vice President'
            },
            {
              name: 'Preetham Sura',
              avatar_url: 'https://reactnative.dev/img/tiny_logo.png',
              subtitle: 'Vice Chairman'
            },
          ];

        let navigationBar = Navigation.getNavigationBar(this.props.navigation.navigate);
        let descriptionText = TextTypes.getDefaultText("Home Screen");

        return (
            <View style={styles.container}>
                <View style={styles.topFiller}>
                </View>
                <View style = {styles.contents}>
                  {descriptionText}
                  {
                    list.map((l, i) => (
                    <ListItem style = {styles.list}
                        key={i}
                        leftAvatar={{ source: { uri: l.avatar_url } }}
                        title={l.name}
                        subtitle={l.subtitle}
                        bottomDivider
                    />
                    ))
                }
                </View>
                {navigationBar}
                <View style={styles.bottomFiller}>
                </View>
            </View>
        )
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.getBackgroundColor()
    },

    descriptionText: { 
        flex: 1, 
        fontSize: 26, 
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    
    contents: {
        flex: 23,
        alignItems: 'center',
    },

    bottomFiller: {
        flex: .5,
    },

    topFiller: {
        flex: 1,
        backgroundColor: 'lightgrey',
    },

    list: {
        alignSelf: 'stretch'
    }
  });