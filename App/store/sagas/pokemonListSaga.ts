import { MAIN_API } from '@config/api';
import {
  fetchPokemonListFailure,
  fetchPokemonListSuccess,
} from '@root/store/actions/pokemoListActions';
import { PokemonListTypes } from '@root/store/types/pokemonListTypes';
import { DraftPokemonListItem, PokemonListItem } from '@root/types/pokemons';
import { getPokemonListPage } from '@store/selectors/pokemonListSelector';
import { mapDraftPokemonList } from '@utils/mapUtils';
import { all, takeLatest, call, put, select } from 'redux-saga/effects';

const getPokemons = async (page: number) => {
  const response = await fetch(`${MAIN_API}/pokemon?limit=50&offset=${50 * page}`);
  const draftPokemonList: DraftPokemonListItem[] = (await response.json()).results;
  return mapDraftPokemonList(draftPokemonList);
};

export function* fetchPokemonListSaga() {
  try {
    const page: number = yield select(getPokemonListPage);
    const pokemonList: PokemonListItem[] = yield call(getPokemons, page);
    yield put(fetchPokemonListSuccess(pokemonList));
  } catch (e) {
    yield put(fetchPokemonListFailure(e.message));
  }
}

export function* pokemonListSaga() {
  yield all([
    takeLatest(PokemonListTypes.FETCH_POKEMON_LIST_REQUEST, fetchPokemonListSaga),
    takeLatest(PokemonListTypes.SCROLL_END_POKEMON_LIST_REQUEST, fetchPokemonListSaga),
  ]);
}
