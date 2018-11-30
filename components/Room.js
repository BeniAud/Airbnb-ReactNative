import React from "react";

import { View, ScrollView, Text } from "react-native";
import MapView from "react-native-maps";
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
            description={item.description}
            price={item.price}
            rating={item.ratingValue}
            reviews={item.reviews}
            user={item.user}
          />

          <MapView
            style={{
              width: "100%",
              height: 400
            }}
            initialRegion={{
              latitude: item.loc[1],
              longitude: item.loc[0],
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
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
