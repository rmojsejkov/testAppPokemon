import { MAIN_API } from '@config/api';
import {
  DraftEvolutionChain,
  DraftPokemonSpecies,
  PokemonListItem,
  PokemonSpecies,
} from '@root/types/pokemons';
import {
  fetchEvolutionChainFailure,
  fetchEvolutionChainRequest,
  fetchEvolutionChainSuccess,
  fetchPokemonDetailsFailure,
  fetchPokemonDetailsSuccess,
} from '@store/actions/pokemonDetailsActions';
import {
  FetchEvolutionChainRequest,
  FetchPokemonDetailsRequest,
  PokemonDetailsTypes,
} from '@store/types/pokemonDetailsTypes';
import { Id } from '@types';
import {
  mapDraftEvolutionChain,
  mapDraftPokemonDetails,
  mapDraftPokemonSpecies,
} from '@utils/mapUtils';
import { all, call, put, takeLatest, SagaReturnType } from 'redux-saga/effects';

const getPokemonDetails = async (id: Id) => {
  const response = await fetch(`${MAIN_API}/pokemon/${id}`);
  return mapDraftPokemonDetails(await response.json());
};

const getEvolutionChain = async (id: Id) => {
  const pokemonSpeciesResponse = await fetch(`${MAIN_API}/pokemon-species/${id}`);
  const pokemonSpecies: PokemonSpecies = mapDraftPokemonSpecies(
    await pokemonSpeciesResponse.json(),
  );
  const evolutionChainResponse = await fetch(
    `${MAIN_API}/evolution-chain/${pokemonSpecies.evolutionChainId}`,
  );
  const draftEvolutionChain: DraftEvolutionChain = await evolutionChainResponse.json();

  return mapDraftEvolutionChain(draftEvolutionChain.chain);
};

function* fetchEvolutionChain(action: FetchEvolutionChainRequest) {
  try {
    const evolutionChain: SagaReturnType<typeof getEvolutionChain> = yield call(
      getEvolutionChain,
      action.payload,
    );
    yield put(fetchEvolutionChainSuccess(evolutionChain));
  } catch (e) {
    yield put(fetchEvolutionChainFailure(e.message));
  }
}

function* fetchPokemonDetails(action: FetchPokemonDetailsRequest) {
  try {
    yield put(fetchEvolutionChainRequest(action.payload));
    const pokemonDetails = yield call<typeof getPokemonDetails>(getPokemonDetails, action.payload);
    yield put(fetchPokemonDetailsSuccess(pokemonDetails));
  } catch (e) {
    yield put(fetchPokemonDetailsFailure(e.message));
  }
}

export function* pokemonDetailsSaga() {
  yield all([
    takeLatest(PokemonDetailsTypes.FETCH_POKEMON_DETAILS_REQUEST, fetchPokemonDetails),
    takeLatest(PokemonDetailsTypes.FETCH_EVOLUTION_CHAIN_REQUEST, fetchEvolutionChain),
  ]);
}
