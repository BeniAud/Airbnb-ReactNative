import React from "react";

import { View, ScrollView, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome";
import CardRoom from "./CardRoom";
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
          <Text numberOfLines={3} style={styles.itemDescript}>
            {item.description}
          </Text>
          <MapView
            style={{
              width: "100%",
              height: 300
            }}
            initialRegion={{
              latitude: item.loc[1],
              longitude: item.loc[0],
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421
            }}
          >
            <MapView.Marker
              coordinate={{
                latitude: item.loc[1],
                longitude: item.loc[0]
              }}
            />
          </MapView>
        </View>
      </ScrollView>
    );
  }
}

export default Room;
const styles = StyleSheet.create({
  itemDescript: {
    paddingBottom: 20,
    fontSize: 15,
    marginHorizontal: 10
  }
});
