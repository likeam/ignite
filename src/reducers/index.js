import { combineReducers } from "redux";
import gameReducer from "./gamesReducrs";

const initState = {
    name: "",
    isLoged: false,
}

const userReducer = (state = initState, action) => {
    switch (action.type){
        default: 
        return {...state};
    }
};

const rootReducer = combineReducers({
    games: gameReducer,
})

export default rootReducer;