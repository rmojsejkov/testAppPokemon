import React from "react";
import { Text, View } from "react-native";
import Colors from "../../../../../constants/colors";
import { styles } from "../styles";

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
          ...styles.statBlockContainer,
        }} />
      </View>
    ))
  );
};


