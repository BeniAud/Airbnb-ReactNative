import React from "react";

import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";

import StarRating from "react-native-star-rating";

class CardRoom extends React.Component {
  render() {
    return (
      <View>
        <View>
          <ImageBackground
            style={styles.imageBackgroundRoom}
            source={{ uri: this.props.photos[0] }}
          >
            <Text style={styles.price}>{this.props.price}€</Text>
          </ImageBackground>
          <View style={styles.textDescription}>
            <View>
              <Text style={{ marginBottom: 20, fontSize: 15 }}>
                {this.props.title}
                <Text numberOfLines={1} style={{ fontSize: 15 }}>
                  {this.props.description}
                </Text>
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
                  rating={this.props.rating}
                />
                <Text style={{ paddingLeft: 5, color: "#c9c3c3" }}>
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
      </View>
    );
  }
}

export default CardRoom;
const styles = StyleSheet.create({
  imageBackgroundRoom: {
    width: "auto",
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
