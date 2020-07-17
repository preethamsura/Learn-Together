import React, {Component, useCallback, useState, useEffect} from 'react'; 
import {View, StyleSheet} from 'react-native';
import Colors from '../components/Colors.js';
import { GiftedChat } from 'react-native-gifted-chat';

/** FIX THIS COMMENT EVENTUALLY */
function ChatScreen({route, navigation}) {

  // Title of the current screen should be other person.
  const { title } = route.params;
  navigation.setOptions({ title: title });

  // COMMENT
  state = {
    messages: [
        {
          _id: 1,
          text: 'This is a test message',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
    ]
  };

  onSend = (newMessages = []) => {
    state.messages.unshift(newMessages[0]);
    GiftedChat.append(newMessages, state.messages)
  };

  return (
      <View style={styles.container}>
          <View style = {styles.contents}>
              <GiftedChat
                  messages={state.messages}
                  onSend = {messages => onSend(messages)}
                  user={{
                      _id: 1,
                  }}
              />
          </View>
      </View>
  )
}

export default ChatScreen;

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
        alignItems: 'stretch'
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