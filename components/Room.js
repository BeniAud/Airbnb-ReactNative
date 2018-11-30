import React from "react";

import { View, ScrollView } from "react-native";
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
            price={item.price}
            rating={item.rating}
            reviews={item.reviews}
            user={item.user}
          />
          <MapView
            style={{
              width: "100%",
              height: 300,
              marginTop: 50
            }}
            initialRegion={{
              latitude: 48.8498514,
              longitude: 2.2841681,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            <MapView.Marker
              coordinate={{
                latitude: 48.8498514,
                longitude: 2.2841681
              }}
            />
          </MapView>
        </View>
      </ScrollView>
    );
  }
}

export default Room;
