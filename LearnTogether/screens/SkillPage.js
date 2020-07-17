import React, {Component} from 'react'; 
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import TextTypes from '../components/Text.js';
import { SearchBar } from 'react-native-elements';
import Colors from '../components/Colors.js';

/** FIX THIS COMMENT EVENTUALLY */
class SkillScreen extends Component {
    state = {
        search: '',
      };
    
      updateSearch = (search) => {
        this.setState({ search });
      };

    render() {
        let descriptionText = TextTypes.getDefaultText("Search for New Skills");
        const { search } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.topFiller}>
                </View>
                <View style={styles.screenTop}>
                    {descriptionText}
                </View>
                <SearchBar style = {styles.searchBar}
                    placeholder="Type Here"
                    onChangeText={this.updateSearch}
                    value={search}
                    lightTheme={true}
                    round={true}
                    containerStyle = {styles.searchBar}
                />
                <View style = {styles.contents}>
                    <Text>
                        {search}
                    </Text>
                </View>
                <View style={styles.bottomFiller}>
                </View>
            </View>
        )
    }
}

export default SkillScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.getBackgroundColor()
    },

    descriptionText: { 
        flex: 1, 
        fontSize: 26, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    contents: {
        flex: 23,
        alignItems: 'center'
    },

    bottomFiller: {
        flex: .5,
    },

    topFiller: {
        flex: 1,
        backgroundColor: 'lightgrey',
    },

    searchBar: {
        backgroundColor: 'white',
    },

    screenTop: {
        flex: 1.5,
        alignItems: 'center',
    },
  });