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
      <View>
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
            <View style={styles.borderButton}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Chat");
                }}
              >
                <Text style={styles.HoteButton}>Contacter l'hôte</Text>
              </TouchableOpacity>
            </View>
            <DescriptionCard description={item.description} />
            <Map location={item.loc} />
          </View>
        </ScrollView>
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
    backgroundColor: "#FE5B5E",
    width: 140,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    position: "absolute",
    bottom: 25,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2
  },
  buttonOpacity: {
    justifyContent: "center",
    alignItems: "center"
  },
  HoteButton: {
    color: "white",
    alignItems: "center"
  },
  borderButton: {
    backgroundColor: "#008489",
    borderRadius: 5,
    width: 120,
    paddingHorizontal: 5,
    marginLeft: 20,
    paddingVertical: 5
  }
});
