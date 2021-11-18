import { IMG_API } from '@config/api';
import {
  DraftEvolutionChain,
  DraftEvolves,
  DraftPokemonAbility,
  DraftPokemonDetails,
  DraftPokemonListItem,
  DraftPokemonSpecies,
  DraftPokemonType,
  DraftStatItem,
  PokemonDetails,
  PokemonEvolve,
  PokemonListItem,
  PokemonSpecies,
} from '@root/types/pokemons';
import { Id, PokemonAbility, PokemonStatItem, PokemonType, Url } from '@types';
import { capitalizeFirstLetter } from '@utils/index';

const mapDraftAbilities = (draftAbilities: DraftPokemonAbility[]): PokemonAbility[] => {
  return draftAbilities.map((abilityItem) => ({
    name: nameToCorrect(abilityItem.ability.name),
    isHidden: abilityItem.is_hidden,
  }));
};

const mapDraftTypes = (draftTypes: DraftPokemonType[]): PokemonType[] => {
  return draftTypes.map((typeItem) => typeItem.type.name);
};

const mapDraftStats = (draftStats: DraftStatItem[]): PokemonStatItem[] => {
  return draftStats.map((statItem) => ({
    name: statNameToCorrect(statItem.stat.name),
    value: statItem.base_stat,
  }));
};

const nameToCorrect = (ability: string) => {
  return ability.split('-').reduce((prev, acc) => prev + ' ' + capitalizeFirstLetter(acc), '');
};

const getIdFromUrl = (url: Url): number => {
  const urlPaths = url.split('/');
  return +urlPaths[urlPaths.length - 2];
};

const statNameToCorrect = (ability: string) => {
  return ability.split('-').reduce((prev, acc) => {
    if (prev.trim().length > 0) {
      return prev.substring(0, 2) + '. ' + capitalizeFirstLetter(acc);
    }
    return capitalizeFirstLetter(acc);
  }, '');
};

export const addZerosForId = (id: Id) => {
  let zeros = '';
  if (id < 10) {
    zeros = '00';
  } else if (id < 100) {
    zeros = '0';
  }
  return zeros + id;
};

export const getPokemonImageUrl = (id: Id) => {
  return `${IMG_API}/${addZerosForId(id)}.png`;
};

export const mapToPokemonListItem = (pokemon: DraftPokemonListItem): PokemonListItem => {
  const id = getIdFromUrl(pokemon.url);

  return { id, name: pokemon.name, imageUrl: getPokemonImageUrl(id) };
};
export const mapDraftPokemonList = (pokemons: DraftPokemonListItem[]): PokemonListItem[] => {
  return pokemons.map((pokemon) => mapToPokemonListItem(pokemon));
};

export const mapDraftPokemonDetails = (
  draftPokemonDetails: DraftPokemonDetails,
): PokemonDetails => {
  return {
    id: draftPokemonDetails.id,
    imageUrl: getPokemonImageUrl(draftPokemonDetails.id),
    data: {
      weight: draftPokemonDetails.weight,
      height: draftPokemonDetails.height,
      national: addZerosForId(draftPokemonDetails.id),
      abilities: mapDraftAbilities(draftPokemonDetails.abilities),
      types: mapDraftTypes(draftPokemonDetails.types),
    },
    stats: mapDraftStats(draftPokemonDetails.stats),
  };
};

export const mapDraftEvolves = (draftEvolves: DraftEvolves): PokemonListItem => {
  const id = getIdFromUrl(draftEvolves.species.url);
  return { id: id, name: draftEvolves.species.name, imageUrl: getPokemonImageUrl(id) };
};

//TODO: check if evolves_to.length > 1
export const mapDraftEvolutionChain = (draftEvolves: DraftEvolves): PokemonListItem[] => {
  return [mapDraftEvolves(draftEvolves)].concat(
    draftEvolves.evolves_to.flatMap((evolve) => mapDraftEvolutionChain(evolve)),
  );
};

export const mapDraftPokemonSpecies = (
  draftPokemonSpecies: DraftPokemonSpecies,
): PokemonSpecies => {
  return {
    evolutionChainId: getIdFromUrl(draftPokemonSpecies.evolution_chain.url),
  };
};
