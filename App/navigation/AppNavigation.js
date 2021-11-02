import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PokemonNavigator } from "./pokemonScreensNavigators/pokemonNavigator";

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <PokemonNavigator />
    </NavigationContainer>
  );
};
