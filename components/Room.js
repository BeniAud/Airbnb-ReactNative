import React from "react";

import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import CardRoom from "./CardRoom";
import Map from "./Map";
import DescriptionCard from "./DescriptionCard";
import RentRoom from "./RentRoom";
class Room extends React.Component {
  render() {
    const item = this.props.navigation.getParam("item");

    return (
      <ScrollView>
        <View>
          <CardRoom
            photos={item.photos}
            title={item.title}
            price={item.price}
            rating={item.ratingValue}
            reviews={item.reviews}
            user={item.user}
          />
          <DescriptionCard description={item.description} />
          <Map location={item.loc} />
          <View style={styles.buttonOpacity}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate("RentRoom");
              }}
            >
              <Text style={styles.buttonAdd}>Réserver</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Room;

const styles = StyleSheet.create({
  buttonAdd: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#ff5b60",
    padding: 15
  },
  button: {
    borderRadius: 10
  },
  buttonOpacity: {
    alignItems: "center",
    marginTop: 20
  }
});
