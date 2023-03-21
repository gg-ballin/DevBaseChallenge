import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

const HomeCard = ({navigation, item, index}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("Person", {
          data: item,
        })
      }>
      <Text style={styles.text}>User </Text>
      <Text style={styles.text}>#{index + 1}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    paddingVertical: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
export default HomeCard;
