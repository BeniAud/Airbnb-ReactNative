import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginForm from "./components/LoginForm";
import Homescreen from "./components/Home";
import RoomLists from "./components/RoomLists";
import SignUp from "./components/SignUp";
import Room from "./components/Room";
import RentRoom from "./components/RentRoom";
import Chat from "./components/Chat";
const AppNavigator = createStackNavigator({
  Home: {
    screen: Homescreen,
    navigationOptions: {
      header: null
    }
  },
  LoginForm: {
    screen: LoginForm,
    navigationOptions: {
      title: "Connexion",
      headerStyle: { backgroundColor: "#008489" },
      headerTintColor: "white"
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Inscription",
      headerStyle: { backgroundColor: "#008489" },
      headerTintColor: "white"
    }
  },
  RoomLists: {
    screen: RoomLists,
    navigationOptions: {
      title: "Logements",
      headerStyle: { backgroundColor: "#008489" },
      headerTintColor: "white"
    }
  },
  Room: {
    screen: Room,
    navigationOptions: {
      headerStyle: { backgroundColor: "#008489" },
      headerTintColor: "white"
    }
  },
  RentRoom: {
    screen: RentRoom,
    navigationOptions: {
      headerStyle: { backgroundColor: "#008489" },
      headerTintColor: "white"
    }
  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      title: "Chat",
      headerStyle: { backgroundColor: "#008489" },
      headerTintColor: "white"
    }
  }
});

export default createAppContainer(AppNavigator);
