import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./MainPokemonNavigation";

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
