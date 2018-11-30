import React from "react";

import { View, ScrollView, Text } from "react-native";
import MapView from "react-native-maps";
import CardRoom from "./CardRoom";
class Map extends React.Component {
  render() {
    const item = this.props.navigation.getParam("item");

    return (
      <View>
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
    );
  }
}

export default Map;
