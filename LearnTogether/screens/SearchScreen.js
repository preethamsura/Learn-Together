import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../components/Colors.js';
import { SearchBar, } from "react-native-elements";

/** FIX THIS COMMENT EVENTUALLY */
function SearchScreen({route, navigation}) {

    // Comment
    const [search, updateSearch] = React.useState("");

    return (
        <View style={styles.container}>
            <View style = {styles.contents}>
                <SearchBar style = {styles.searchBar}
                            placeholder="Type Here..."
                            onChangeText={updateSearch}
                            value={search}
                            lightTheme={true}
                            round={true}
                            containerStyle = {styles.searchBar}
                        />
                <Text>
                    {search}
                </Text>
            </View>
        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.getBackgroundColor(),
      alignItems: 'stretch'
    },

    descriptionText: { 
        flex: 1, 
        fontSize: 26, 
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    
    contents: {
        flex: 23,
        alignItems: 'stretch',
    },

    bottomFiller: {
        flex: .5,
        backgroundColor: 'lightgrey'
    },

    topFiller: {
        flex: 1,
        backgroundColor: 'lightgrey',
    },
  });