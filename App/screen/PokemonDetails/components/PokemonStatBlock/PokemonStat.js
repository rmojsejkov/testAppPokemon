import React from "react";
import { Text, View } from "react-native";
import { PokemonStatBlock } from "./components/PokemonStatBlock";
import { styles } from "./styles";

export const PokemonStat = props => {
  const { stats } = props;

  return (
    <View style={styles.statContainer}>
      <Text style={styles.titleText}>Base stats</Text>
      <View>
        <PokemonStatBlock stats={stats} />
        <View>
        </View>
      </View>
    </View>
  );
};
