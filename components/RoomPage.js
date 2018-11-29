import React from "react";
import axios from "axios";
import {
  Image,
  Avatar,
  ImageBackground,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  ScrollView,
  Text
} from "react-native";

import StarRating from "react-native-star-rating";
class RoomPage extends React.Component {
  state = {
    rooms: []
  };

  componentDidMount() {
    axios
      .get("https://airbnb-api.now.sh/api/room?city=paris")
      .then(response => {
        if (response.data) {
          this.setState({ rooms: response.data.rooms });
        }
      });
  }

  render() {
    const width = Dimensions.get("window").width;
    console.log(width);

    const height = Dimensions.get("window").height;
    console.log(height);
    return (
      <ScrollView>
        <FlatList
          data={this.state.rooms}
          renderItem={({ item }) => (
            <View>
              <ImageBackground
                style={styles.imageBackgroundRoom}
                source={{ uri: item.photos[0] }}
              >
                <Text style={styles.price}>{item.price}€</Text>
              </ImageBackground>
              <View style={styles.textDescription}>
                <View>
                  <Text style={{ marginBottom: 20, fontSize: 18 }}>
                    {item.title}
                  </Text>
                  <View
                    style={{
                      width: 60,
                      flexDirection: "row"
                    }}
                  >
                    <StarRating
                      fullStarColor={"#ffc200"}
                      emptyStarColor={"#c9c3c3"}
                      starSize={20}
                      disabled={false}
                      maxStars={5}
                      rating={item.ratingValue}
                    />
                    <Text style={{ paddingLeft: 5, color: "#c9c3c3" }}>
                      reviews
                    </Text>
                  </View>
                </View>
                <Image
                  style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
                  source={{ uri: item.user.account.photos[0] }}
                />
              </View>
            </View>
          )}
        />
      </ScrollView>
    );
  }
}

export default RoomPage;
const styles = StyleSheet.create({
  imageBackgroundRoom: {
    width: "auto",
    height: 200,
    position: "relative"
  },
  price: {
    backgroundColor: "black",
    borderRadius: 10,
    opacity: 0.8,
    paddingVertical: 10,
    paddingLeft: 10,
    fontSize: 40,

    color: "white",
    position: "absolute",
    bottom: 12,
    left: 1
  },
  textDescription: {
    borderBottomWidth: 1,
    borderBottomColor: "#c9c3c3",
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingVertical: 10
  }
});
