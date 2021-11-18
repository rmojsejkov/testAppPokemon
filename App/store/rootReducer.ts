import { combineReducers } from 'redux';
import { pokemonDetailsReducer } from '@store/reducers/pokemonDetailsReducer';
import { pokemonListReducer } from '@store/reducers/pokemonListReducer';

export const rootReducer = combineReducers({
  pokemonListState: pokemonListReducer,
  pokemonDetailsState: pokemonDetailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
