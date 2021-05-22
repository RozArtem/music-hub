import { ITrackState, TracksActions, TracksActionsTypes } from "../../types/track";


const InitialState: ITrackState = {
    tracks: [],
    currentTrack: null,
    isLoading: false,
    error: null

}


export const trackReducer = (state = InitialState, action: TracksActions) : ITrackState  => {

    switch(action.type) {

        case TracksActionsTypes.GETING_TRACK_LOAD: {

            return {...state, isLoading: true}
        }
    
        case TracksActionsTypes.ADD_TRACK: {
            
            return {...state}
        }

        case TracksActionsTypes.GET_OWN_TRACKS: {

            return {...state, tracks: action.payload, isLoading: false}
        }

        case TracksActionsTypes.GET_TRACK: {

            return {...state, currentTrack: action.payload, isLoading: false}
        }
        case TracksActionsTypes.SEATCH_TRACK: {

            return{...state, tracks: action.payload, isLoading: false}
        }
       

        default:
            return state
    }

   
}