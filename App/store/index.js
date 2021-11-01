import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { mainReducer } from "./reducers/mainReducer";

export const store = createStore(mainReducer, applyMiddleware(thunk));
