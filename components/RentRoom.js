import React from "react";
import { Text, View, ScrollView } from "react-native";

class RentRoom extends React.Component {
  render() {
    // const { params } = this.props.navigation.state;
    // const item = this.props.navigation.getParam("item");

    return (
      <ScrollView>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>RESERVATION APPARTEMENT</Text>
          <Text>Titre annonce </Text>
          <Text>Nom proprietaire</Text>
          <Text>Map localisation appartement</Text>
          <Text>Calendrier reservation</Text>
        </View>
      </ScrollView>
    );
  }
}

export default RentRoom;
