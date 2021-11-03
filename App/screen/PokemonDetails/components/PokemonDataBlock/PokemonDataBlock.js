import React from "react";
import { PokemonDataBlockItem } from "./components/PokemonDataBlockItem";

export const PokemonDataBlock = props => {
  const { pokemonData } = props;

  return (
    <PokemonDataBlockItem pokemonData={pokemonData} />
  );
};

