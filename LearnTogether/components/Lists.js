import React, {Component} from 'react'; 
import {View, StyleSheet,} from 'react-native';
import { ListItem } from 'react-native-elements';
import Button from './Button.js';

/** FIXME AND FIX HOW EXPORTS ARE DONE FOR THIS CLASS */
class ListsClass extends Component {
    
    /**
     * Creates a list item with the contents of list and a button which will navigate to another screen.
     * @param {*} list - List of items which are meant to be converted to list format. 
     * @param {*} style - Style of the list. 
     * @param {*} navigation - Method used to navigate to different screens.
     * @param {*} parameter - Parameters which are passed in to each of the onPress methods of the lists. 
     */
    getNavigateListItem = (list, style = undefined, navigation = undefined, parameter = undefined) => {
        let styles;
        if (style != undefined) {
            styles = style
        } else {
            styles = defaultStyles
        }
        return (
            <View style = {styles.list}>
                {
                list.map((l, i) => (
                <ListItem
                    key={i}
                    leftAvatar={{ source: { uri: l.avatar_url } }}
                    title={l.name}
                    subtitle={l.subtitle}
                    bottomDivider
                    onPress={() => navigation.navigate(parameter, {title: l.name,})}
                />
                ))
                }
            </View>
        )
            }

    /**
     * Returns a list containing the different items which will represent the default categories on the SkillPage.
     * @param {*} listItems - All the different times which represent categories. 
     * @param {*} navigate - Method used to navigate to the other screen.
     * @param {*} screenName - Name of the screen which is being navigated to.
     */
    getSkillBoxList = (listItems = [], navigate, screenName) => {
        return (
            <View style = {defaultStyles.list}>
                {
                listItems.map((l, i) => (
                <View style = {defaultStyles.buttonRows}
                    key = {i}
                    > 
                    {Button.getNavigateButton(l.leftElement, navigate, screenName, {title: l.leftElement})}
                    {Button.getNavigateButton(l.rightElement, navigate, screenName, {title: l.rightElement})}
                </View>
                ))
                }
            </View>
        )
    }

}

const Lists = new ListsClass();
export default Lists;

const defaultStyles = StyleSheet.create({
    list: {
        alignSelf: 'stretch'
    },

    buttonRows: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignContent: "stretch",
    },
});