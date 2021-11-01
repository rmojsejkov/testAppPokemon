import { combineReducers } from "redux";
import { pokemonReducer } from "./pokemonReducers/pokemonReducer";

export const mainReducer = combineReducers({
  pokemon: pokemonReducer,
});
