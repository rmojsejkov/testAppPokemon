import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { TouchableComponent } from "./TouchableComponent";
import Block from "./Block";

const ServiceBlockItem = ({ pokemon, onSelect }) => {
  return (
    <Block style={styles.block}>
      <View style={styles.touchable}>
        <TouchableComponent onPress={() => onSelect(pokemon)}>
          <View>
            <View style={styles.title}>
              <Text style={styles.titleText}>{pokemon.name}</Text>
            </View>
            <View style={styles.abilityContainer}>
              <View style={styles.abilityTextCont}>
                <Text style={styles.abilityText}>something text: {pokemon.name}</Text>
              </View>
            </View>
          </View>
        </TouchableComponent>
      </View>
    </Block>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  abilityContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  weather: {
    paddingVertical: 5,
  },
  abilityTextCont: {
    paddingVertical: 5,

  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 17,
    fontWeight: "bold",
    alignItems: "center",
  },
  touchable: {
    overflow: "hidden",
    borderRadius: 9,
  },
  abilityText: {
    fontSize: 15,
  },
});

export default ServiceBlockItem;