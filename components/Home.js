import React from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
class Home extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.containerLoginText}
        contentContainerStyle={{ flex: 1 }}
      >
        <View style={styles.icon}>
          <Image
            style={{
              textAlign: "center",
              color: "white",
              marginTop: 130,
              marginLeft: 140
            }}
            source={require("../images/logo.png")}
          />
        </View>

        <View>
          <Text
            style={{
              fontSize: 50,
              marginTop: 200,
              color: "white",
              textAlign: "center"
            }}
          >
            Welcome
          </Text>
          <View style={styles.buttonOpacity}>
            <TouchableOpacity
              style={styles.loginHome}
              onPress={() => {
                this.props.navigation.navigate("LoginForm");
              }}
            >
              <Text style={styles.buttonAdd}>Connexion</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              marginTop: 30,
              paddingLeft: 100
            }}
          >
            Vous n'avez pas de compte ?
          </Text>
          <View style={styles.buttonOpacity}>
            <TouchableOpacity
              style={styles.loginHome}
              onPress={() => {
                this.props.navigation.navigate("SignUp");
              }}
            >
              <Text style={styles.buttonAdd}>Inscription</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonOpacity}>
          <TouchableOpacity
            style={styles.loginHomeRoom}
            onPress={() => {
              this.props.navigation.navigate("RoomLists");
            }}
          >
            <Text style={styles.buttonRoom}>Visualiser les annonces</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  containerLoginText: {
    backgroundColor: "#ff5b60",
    flex: 1
  },
  loginHome: {
    width: 150,
    paddingVertical: 10,
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "white"
  },
  buttonAdd: {
    paddingLeft: 27,
    fontSize: 20,
    color: "#ff5b60"
  },
  icon: {
    height: 70,
    width: 30
  },
  buttonOpacity: {
    alignItems: "center",
    marginTop: 30
  },
  buttonRoom: {
    paddingLeft: 27,
    fontSize: 20,
    color: "white"
  },
  loginHomeRoom: {
    width: 250,
    paddingVertical: 10,
    justifyContent: "center",
    borderColor: "white",
    backgroundColor: "#ff5b60"
  }
});
