import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Form, Input, Item, Button, Label } from "native-base";

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "CHAT BOX",
    headerStyle: {
      backgroundColor: "#fd0759"
    },
    headerTintColor: "#FFF"

  });

  state = {
    name: "",

  };

  nav = (name) => {

    this.props.navigation.navigate("Chat", { name });
  }
  render() {
    return (
      <Container style={styles.Container}>
        <View style ={{alignSelf :"center",marginBottom:40,marginTop:10}}>
          <Text style = {{fontSize:37 , fontWeight: "600",borderBottomWidth:4}}>Chat Anonymously</Text>
        </View>
        <View style ={{marginBottom:15}}>
          <Text style = {{fontSize:17}}>
            Chat with anyone using anonymous names as there is no name verification.
            </Text>
            <Text style = {{fontSize:17}}>
            Chat anonymously over any topic.
            </Text>
            <Text style = {{fontSize:17}}>
            No one is monitoring or judging you beacuse no one knows your identity
            so you can freely share your views or opinions without having fear of being judged.
        </Text>
        </View>
        <View>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="name-phone-pad"
                onChangeText={name => this.setState({ name })}
              />
            </Item>

            <Button
              style={{ marginTop: 20 }}
              full
              rounded
              success
              onPress={() => {
                this.nav(this.state.name
                );

              }}
            ><Text style={{ color: "white" }}>Start chat</Text></Button>

          </Form>
        </View>
      </Container >
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    
    padding: 10
  },
});


export default Home;
