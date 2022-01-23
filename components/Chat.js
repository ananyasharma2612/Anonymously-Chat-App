import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Firebase from '../Firebase';

class Chat extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: " CHAT BOX",
    headerStyle: {
      backgroundColor: "#fd0759"
    },
    headerTintColor: "#FFF"
  });
  state = {
    messages: [],


  };

  get user() {
    const { params } = this.props.navigation.state;
    const name = params ? params.name : null;
    return {
      _id: Firebase.shared.uid,
      name: name,
    };
  }

  componentDidMount() {
    Firebase.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );

  }
  componentWillUnmount() {
    Firebase.shared.off();
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        renderUsernameOnMessage={true}
        user={this.user}
        onSend={Firebase.shared.send}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Chat;