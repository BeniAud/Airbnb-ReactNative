import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ReadMore from "react-native-read-more-text";

class DescriptionCard extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.descriptionTitle}>Description</Text>
        </View>

        <View>
          <View style={styles.textCard}>
            <ReadMore
              numberOfLines={1}
              renderTruncatedFooter={this._renderTruncatedFooter}
              renderRevealedFooter={this._renderRevealedFooter}
              onReady={this._handleTextReady}
            >
              <Text style={styles.descriptionText}>
                {this.props.description}
              </Text>
            </ReadMore>
          </View>
        </View>
      </View>
    );
  }

  _renderTruncatedFooter = handlePress => {
    return (
      <View style={styles.button}>
        <Text style={styles.buttonText} onPress={handlePress}>
          Read more
        </Text>
      </View>
    );
  };

  _renderRevealedFooter = handlePress => {
    return (
      <View style={styles.button}>
        <Text style={styles.buttonText} onPress={handlePress}>
          Show less
        </Text>
      </View>
    );
  };

  _handleTextReady = () => {
    // ...
  };
}
export default DescriptionCard;
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ff5b60",
    width: 100,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 10
  },
  buttonText: {
    color: "white",
    marginHorizontal: 10
  },
  textCard: {
    paddingHorizontal: 10
  },
  descriptionText: {
    marginTop: 10,
    marginHorizontal: 10,
    fontSize: 15
  },

  descriptionTitle: {
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 18,
    marginHorizontal: 10
  }
});
