import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginForm from "./components/LoginForm";
import Homescreen from "./components/Home";
import RoomPage from "./components/RoomPage";
import SignUp from "./components/SignUp";

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
  RoomPage: {
    screen: RoomPage
  }
});

export default createAppContainer(AppNavigator);
