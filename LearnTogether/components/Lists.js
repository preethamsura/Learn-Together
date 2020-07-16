import React, {Component} from 'react'; 
import {View, StyleSheet,} from 'react-native';
import { ListItem } from 'react-native-elements';

/** FIXME */
class ListsClass extends Component {
    
    /** FIXME */
    getListItem = (list, style = undefined, method = undefined) => {
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
                    onPress={() => method.navigate("Chat", {title: l.name,})}
                />
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
    }
});