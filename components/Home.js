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
              marginTop: 70,
              marginLeft: 140
            }}
            source={require("../images/logo-airbnb.png")}
          />
        </View>

        <View>
          {/* <Text
            style={{
              fontSize: 50,
              marginTop: 200,
              color: "white",
              textAlign: "center"
            }}
          >
            Welcome
          </Text> */}
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
              color: "#ff5b60",
              fontWeight: "bold",
              marginTop: 10,
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
            style={styles.loginHomeTest}
            onPress={() => {
              this.props.navigation.navigate("RoomLists");
            }}
          >
            <Text style={styles.buttonAdd}>Visualiser les annonces</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  loginHome: {
    width: 150,
    marginVertical: 10,
    paddingVertical: 10,
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#ff5b60"
  },
  loginHomeTest: {
    width: 250,
    paddingVertical: 10,
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#ff5b60"
  },
  buttonAdd: {
    paddingLeft: 27,
    fontSize: 20,
    color: "white"
  },
  icon: {
    marginBottom: 400,
    marginLeft: 100,
    alignItems: "center",
    height: 70,
    width: 30
  },
  buttonOpacity: {
    alignItems: "center"
  }
});
