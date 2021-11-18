import { all, fork } from 'redux-saga/effects';
import { pokemonListSaga } from '@store/sagas/pokemonListSaga';
import { pokemonDetailsSaga } from '@store/sagas/pokemonDetailsSaga';

export function* rootSaga() {
  yield all([fork(pokemonListSaga), fork(pokemonDetailsSaga)]);
}
