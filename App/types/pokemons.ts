import {
  Id,
  Name,
  PokemonAbility,
  PokemonHeight,
  PokemonStatItem,
  PokemonType,
  PokemonWeight,
  Url,
} from '@types';

export type PokemonListItem = {
  id: Id;
  name: Name;
  imageUrl: Url;
};

export type DraftPokemonListItem = {
  name: Name;
  url: Url;
};

export type PokemonDetails = {
  id: Id;
  imageUrl: Url;
  data: {
    national: string;
    types: PokemonType[];
    height: PokemonHeight;
    weight: PokemonWeight;
    abilities: PokemonAbility[];
  };
  stats: PokemonStatItem[];
};

export type PokemonEvolve = {
  id: Id;
  name: Name;
  evolvesTo: PokemonEvolve[];
};

export type PokemonSpecies = {
  evolutionChainId: Id;
};

export type DraftPokemonType = {
  slot: number;
  type: {
    name: string;
  };
};

export type DraftPokemonAbility = {
  slot: number;
  is_hidden: boolean;
  ability: {
    name: string;
  };
};

export type DraftStatItem = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
};

export type DraftPokemonDetails = {
  id: number;
  height: number;
  weight: number;
  types: DraftPokemonType[];
  abilities: DraftPokemonAbility[];
  stats: DraftStatItem[];
};

export type DraftPokemonSpecies = {
  evolution_chain: {
    url: Url;
  };
};

export type DraftEvolves = {
  evolves_to: DraftEvolves[];
  species: {
    name: Name;
    url: Url;
  };
};

export type DraftEvolutionChain = {
  chain: DraftEvolves;
};
