import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginForm from "./components/LoginForm";
import Homescreen from "./components/Home";
import RoomLists from "./components/RoomLists";
import SignUp from "./components/SignUp";
import CardRoom from "./components/CardRoom";
import Room from "./components/Room";
const AppNavigator = createStackNavigator({
  Home: {
    screen: Homescreen,
    navigationOptions: {
      header: null
    }
  },
  LoginForm: {
    screen: LoginForm
  },
  SignUp: {
    screen: SignUp
  },
  RoomLists: {
    screen: RoomLists,
    navigationOptions: {
      title: "AirBnb",
      headerStyle: { backgroundColor: "#ff5b60" }
    }
  },
  Room: {
    screen: Room
  }
});

export default createAppContainer(AppNavigator);
