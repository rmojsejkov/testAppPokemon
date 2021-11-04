import { Text, View } from "react-native";
import React from "react";
import { styles } from "../styles";

export const AbilityItem = (props) => {
  const { pokemonData } = props;
  return (
    <View>
      {pokemonData.abilities.map(abilityItem => (
        <View
          key={abilityItem.ability.name}
          style={styles.abilityContainer}>
          <Text style={styles.dataText}>{abilityItem.ability.name}</Text>
          {abilityItem.is_hidden && <Text> hidden</Text>}
        </View>
      ))}
    </View>
  );
};
