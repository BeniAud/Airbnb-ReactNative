import React from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
class Map extends React.Component {
  render() {
    return (
      <View>
        <MapView
          style={{
            width: "100%",
            height: 400
          }}
          initialRegion={{
            latitude: this.props.location[1],
            longitude: this.props.location[0],
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: this.props.location[1],
              longitude: this.props.location[0]
            }}
          />
        </MapView>
      </View>
    );
  }
}

export default Map;
