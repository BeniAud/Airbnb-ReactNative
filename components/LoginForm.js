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
    loading: false
  };

  onPress = () => {
    axios
      .post("https://airbnb-api.now.sh/api/user/log_in", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response.data);

        if (response.data && response.data.token) {
          this.props.navigation.navigate("RoomLists", {
            username: response.data.account.username
          });
          ({
            token: response.data.token,
            username: response.data.account.username,
            _id: response.data._id
          });
        }
      })
      .catch(err => {
        this.setState({ error: "", loading: true });
      });
  };
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.containerLogin}
        behavior="padding"
        enabled
      >
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <TextInput
            style={styles.textInput}
            label="Email Address"
            placeholder="you@domain.com"
            placeholderTextColor="#ff5b60"
            value={this.state.email}
            onChangeText={value => this.setState({ email: value })}
          />
          {/* <Text>Une adresse e-mail est obligatoire.</Text> */}
          <TextInput
            style={styles.textInput}
            label="Password"
            placeholder="*******"
            placeholderTextColor="#ff5b60"
            secureTextEntry //boolean ={true}
            value={this.state.password}
            onChangeText={value => this.setState({ password: value })}
          />
          {/* <Text>Un mot de passe est obligatoire.</Text> */}
          <Text>
            {" "}
            {this.state.loading === true
              ? "votre Email ou votre mot de passe est invalide"
              : ""}
          </Text>
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
          <View style={styles.account}>
            <Text style={{ fontSize: 15, color: "#ff5b60" }}>
              Vous n'avez pas de compte ?
            </Text>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("SignUp");
                }}
              >
                <Text style={{ color: "#ff5b60", fontSize: 15 }}>
                  {" "}
                  Inscription
                </Text>
              </TouchableOpacity>
            </View>
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
    backgroundColor: "white",
    paddingVertical: 100
  },
  loginHome: {
    width: 150,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 50,
    backgroundColor: "#ff5b60"
  },
  buttonAdd: {
    fontSize: 20,
    color: "white"
  },
  textInput: {
    justifyContent: "center",
    paddingTop: 50,
    color: "#ff5b60",
    opacity: 0.8,
    fontSize: 15,
    borderBottomWidth: 1,
    borderColor: "#ff5b60",
    width: 250
  },
  buttonOpacity: {
    alignItems: "center"
  },
  account: {
    flexDirection: "row",
    marginTop: 40,
    fontSize: 18
  }
});
