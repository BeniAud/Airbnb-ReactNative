import React from "react";
import axios from "axios";
import {
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
  ScrollView,
  Text
} from "react-native";

import CardRoom from "./CardRoom";
class RoomLists extends React.Component {
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
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Room", {
                    item
                  });
                }}
              >
                <CardRoom
                  photos={item.photos}
                  title={item.title}
                  price={item.price}
                  rating={item.ratingValue}
                  reviews={item.reviews}
                  user={item.user}
                />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => item._id}
        />
      </ScrollView>
    );
  }
}

export default RoomLists;
