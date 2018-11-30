import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import StarRating from "react-native-star-rating";

class CardRoom extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={styles.imageBackgroundRoom}
          source={{ uri: this.props.photos[0] }}
        >
          <Text style={styles.price}>{this.props.price}€</Text>
        </ImageBackground>
        <View style={styles.textDescription}>
          <View style={{ marginBottom: 20 }}>
            <Text numberOfLines={1} style={styles.textTitle}>
              {this.props.title}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ paddingTop: 10 }}>
                <StarRating
                  fullStarColor={"#ffc200"}
                  emptyStarColor={"#c9c3c3"}
                  starSize={20}
                  disabled={false}
                  maxStars={5}
                  rating={this.props.rating}
                />
              </View>
              <Text
                style={{ color: "#c9c3c3", paddingTop: 12, paddingLeft: 2 }}
              >
                {this.props.reviews} reviews
              </Text>
            </View>
          </View>
          <Image
            style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
            source={{ uri: this.props.user.account.photos[0] }}
          />
        </View>
      </View>
    );
  }
}

export default CardRoom;
const styles = StyleSheet.create({
  imageBackgroundRoom: {
    height: 200,
    position: "relative"
  },
  price: {
    backgroundColor: "rgba(0,0,0,0.5)",
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginHorizontal: 10,
    paddingVertical: 10
  },
  textTitle: {
    fontSize: 18
  }
});
