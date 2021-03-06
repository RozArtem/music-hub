import {combineReducers} from "redux";
import { albumReduser } from "./albumsReducer";
import { currentUserReducer } from "./currentUserReducer";
import { playerReducer } from "./playerReducer";
import { trackReducer } from "./tracksReduser";
import { usersReducer } from "./usersReducer";



export const rootReducer = combineReducers({
  
    currentUser: currentUserReducer,
    users: usersReducer,
    track: trackReducer,
    album: albumReduser,
    player: playerReducer
    
})

export type RootState = ReturnType<typeof rootReducer>