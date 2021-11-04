import { Text, View } from "react-native";
import React from "react";
import { AbilityItem } from "./AbilityItem";
import { styles } from "../styles";

export const PokemonDataBlockItem = (props) => {

  const { pokemonData } = props;

  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.titleText}>Pokedex data</Text>
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.dataText}>National №: {pokemonData.id}</Text>
        <Text style={styles.dataText}>
          Type: {pokemonData.types.map(typeItem => typeItem.type.name + " ")}
        </Text>
        <Text style={styles.dataText}>Species: {pokemonData.species.name}</Text>
        <Text style={styles.dataText}>Height: {pokemonData.height}</Text>
        <Text style={styles.dataText}>Weight: {pokemonData.weight}</Text>
        <View style={styles.abilityContainer}>
          <Text style={styles.dataText}>Abilities: </Text>
          <AbilityItem pokemonData={pokemonData} />
        </View>
      </View>
    </View>
  );
};


