import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../../../../constants/colors";

export const PokemonStatBlock = props => {
  const { stats } = props;

  return (
    stats.map(statItem => (
      <View style={styles.itemContainer} key={statItem.stat.name}>
        <Text style={styles.statText}>{statItem.stat.name}</Text>
        <Text style={styles.statValue}>{statItem.base_stat}</Text>
        <View style={{
          width: statItem.base_stat + 30,
          backgroundColor: statItem.base_stat > 80 ? Colors.lightGreen : Colors.coral,
          ...styles.statContainer,
        }} />
      </View>
    ))
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingVertical: 10,
    padding: 20,
    borderColor: Colors.darker,
  },
  statText: {
    color: Colors.darker,
    marginRight: 20,
  },
  statValue: {
    color: Colors.black,
    marginRight: 20,
    fontWeight: "bold",
  },
  statContainer: {
    borderRadius: 7,
    marginHorizontal: 10,
  },
});
