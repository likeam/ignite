import { type } from "@testing-library/user-event/dist/type"

const initState = {
    popular : [],
    newGames : [],
    upcoming : []
}


const gameReducer = (state = initState, action ) => {
    switch (action.type ){
        case "FETCH_GAMES":
            return {...state}
        default: 
            return {...state }
    }
}


//ACTION
{
    type: "FETCH_GAMES";
}
dispatch({type: "FETCH_GAMES"});

export default gameReducer;