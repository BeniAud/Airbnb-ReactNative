import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

class Chat extends React.Component {
  state = {
    messages: []
  };

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any"
          }
        }
      ]
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
          text: "My message",
          createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://facebook.github.io/react/img/logo_og.png"
          },
          image: "https://facebook.github.io/react/img/logo_og.png"
          // Any additional custom parameters are passed through
        }}
      />
    );
  }
}

export default Chat;
// const styles = StyleSheet.create({
//   containerLogin: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   }
// });
