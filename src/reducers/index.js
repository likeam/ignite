import { combineReducers } from "redux";
import gameReducer from "./gamesReducrs";

const rootReducer = combineReducers({
    games: gameReducer,
})