import React, {Component} from 'react'; 
import {View, StyleSheet,} from 'react-native';
import { ListItem } from 'react-native-elements';

/** FIXME AND FIX HOW EXPORTS ARE DONE FOR THIS CLASS */
class ListsClass extends Component {
    
    /** FIXME */
    getNavigateListItem = (list, style = undefined, method = undefined, parameter = undefined) => {
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
                    onPress={() => method.navigate(parameter, {title: l.name,})}
                />
                ))
                }
            </View>
        )
    }

    getSkillBoxList = () => {
        
    }

}

const Lists = new ListsClass();
export default Lists;

const defaultStyles = StyleSheet.create({
    list: {
        alignSelf: 'stretch'
    }
});