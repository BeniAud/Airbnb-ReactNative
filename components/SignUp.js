import React from "react";
import axios from "axios";
import {
  Image,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    passwordConfirm: "",
    username: "",
    name: "",
    description: "",
    passwordIncorrect: false,
    loading: false,
    message: null
  };

  onPress = () => {
    if (this.state.password === this.state.passwordConfirm) {
      axios
        .post("https://airbnb-api.now.sh/api/user/sign_up", {
          email: this.state.email,
          password: this.state.password,
          username: this.state.username,
          name: this.state.name,
          description: this.state.description
        })
        .then(response => {
          if (response.data && response.data.token) {
            this.props.navigation.navigate("RoomPage");
            ({
              token: response.data.token,
              username: response.data.account.username,
              _id: response.data._id
            });
          }
        });
    } else {
      this.setState({
        message: "les mots de passe ne sont pas identiques",
        passwordIncorrect: true
      });
    }
  };
  renderError() {
    if (this.state.errorMessage) {
      return <p>{this.state.errorMessage}</p>;
    } else {
      return null;
    }
  }
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.containerLogin}
        behavior="padding"
        enabled
      >
        <ScrollView
          style={styles.containerLoginText}
          contentContainerStyle={{ flex: 1 }}
        >
          {/* <Text style={styles.textSignup}>
            Inscrivez-vous avec Facebook ou Google
          </Text> */}
          {/* <Text
            style={{
              // borderLeftWidth: 1,
              // borderColor: "white",
              // width: 40,
              color: "#008489",
              marginTop: 20,
              marginLeft: 130
            }}
          >
            {" "}
            ou{" "}
          </Text> */}
          <TextInput
            style={styles.textInput}
            label="Email Address"
            placeholder="Email : you@domain.com"
            placeholderTextColor="#797979"
            value={this.state.email}
            onChangeText={value => this.setState({ email: value })}
          />
          <TextInput
            style={styles.textInput}
            label="Password"
            placeholder=" Mot de passe : *******"
            placeholderTextColor="#797979"
            secureTextEntry
            value={this.state.password}
            onChangeText={value => this.setState({ password: value })}
          />
          <TextInput
            style={styles.textInput}
            label="Password"
            placeholder=" Confirmer mot de passe : *******"
            placeholderTextColor="#797979"
            secureTextEntry
            value={this.state.passwordConfirm}
            onChangeText={value => this.setState({ passwordConfirm: value })}
          />

          <Text>
            {this.state.passwordIncorrect === true ? this.state.message : ""}
          </Text>
          <TextInput
            style={styles.textInput}
            label="username"
            placeholder="Prenon : John"
            placeholderTextColor="#797979"
            value={this.state.username}
            onChangeText={value => this.setState({ username: value })}
          />
          <TextInput
            style={styles.textInput}
            label="name"
            placeholder="Nom : Doe"
            placeholderTextColor="#797979"
            value={this.state.name}
            onChangeText={value => this.setState({ name: value })}
          />
          <TextInput
            style={styles.textInput}
            label="description"
            placeholder="description"
            placeholderTextColor="#797979"
            value={this.state.description}
            onChangeText={value => this.setState({ description: value })}
          />
          <View style={styles.buttonOpacity}>
            <TouchableOpacity
              style={styles.loginHome}
              onPress={() => {
                this.onPress();
              }}
            >
              <Text style={styles.buttonAdd}>Confirmer</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default LoginForm;
const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },

  loginHome: {
    width: 150,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 40,
    backgroundColor: "#008489"
  },
  buttonAdd: {
    fontSize: 20,
    color: "white"
  },
  textInput: {
    justifyContent: "center",
    opacity: 0.8,
    paddingTop: 45,
    color: "#008489",
    fontSize: 15,
    borderBottomWidth: 1,
    borderColor: "#008489",
    width: 250
  },
  buttonOpacity: {
    alignItems: "center"
  },
  textSignup: {
    marginTop: 10,
    paddingTop: 10,
    fontSize: 15,
    color: "#008489",
    alignItems: "center"
  }
});
