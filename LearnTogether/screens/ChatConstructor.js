import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../components/Colors.js';
import { GiftedChat } from 'react-native-gifted-chat';

/** FIX THIS COMMENT EVENTUALLY */
function ChatScreen({route, navigation}) {

  // Title of the current screen should be other person.
  const { title } = route.params;
  navigation.setOptions({ title: title });

  // NEEDS TO BE UPDATED SO THAT ITS ONLY CURRENT MESSAGES. 
  let getMessages = [
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

  // Creates a messages state variable and the setMessages function which can 
  // be used to update the messages variable. 
  const [messages, setMessages] = React.useState(getMessages)
  
  /**
   * Updates the chat messages upon sending a message. Will also send the message to
   * the server to be updated. 
   * @param {*} newMessages = New message which has just been sent in the chat. 
   */
  let onSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages))
  };
  
  return (
      <View style={styles.container}>
          <View style = {styles.contents}>
              <GiftedChat
                  messages={messages}
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