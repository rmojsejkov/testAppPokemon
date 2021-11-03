import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "react-native/Libraries/NewAppScreen/components/Colors";
import { AbilityItem } from "./AbilityItem";

export const PokemonDataBlockItem = (props) => {

  const {pokemonData} = props;

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
          <AbilityItem pokemonData={pokemonData}/>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  title: {
    paddingVertical: 20,
  },
  titleText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.black,
  },
  dataContainer: {
    paddingHorizontal: 40,
  },
  dataText: {
    fontSize: 15,
    color: Colors.black,
  },
  abilityContainer: {
    flexDirection: "row",
  },
});
