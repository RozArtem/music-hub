import { ITrackState, TracksActions, TracksActionsTypes } from "../../types/track";


const InitialState: ITrackState = {
    tracks: [],
    currentTrack: null,
    coments: [],
    isLoading: false,
    error: null,
    offset: 10,
    countOfAll: 0,

}


export const trackReducer = (state = InitialState, action: TracksActions): ITrackState => {

    switch (action.type) {

        case TracksActionsTypes.NULLIFY_OFFSET: {

            return { ...state, offset: 0 }
        }
        case TracksActionsTypes.INCREASE_OFFSET: {

            return { ...state, offset: state.offset + 10 }
        }
        case TracksActionsTypes.INCREASE_OFFSET: {

            return { ...state, offset: state.offset + 10 }
        }
        case TracksActionsTypes.DECREASE_OFFSET: {

            return { ...state, offset: state.offset - 10 }
        }
        case TracksActionsTypes.GETING_TRACK_LOAD: {

            return { ...state, isLoading: true }
        }

        case TracksActionsTypes.ADD_TRACK: {

            return { ...state }
        }
        case TracksActionsTypes.ADD_COMMENT_TO_TRACK: {

           
            return { ...state, coments: [...state.coments, action.payload]}
        }

        case TracksActionsTypes.GET_OWN_TRACKS: {

            return { ...state, tracks: action.payload, isLoading: false }
        }

        case TracksActionsTypes.GET_TRACK: {

            return { ...state, currentTrack: action.payload, isLoading: false }
        }
        case TracksActionsTypes.GET_ALL_TRACKS: {

            return { ...state, 
                tracks: action.payload.tracks, 
                isLoading: false,
                countOfAll: action.payload.countOfAll
            }
        }
        case TracksActionsTypes.GET_COMMENTS: {

            return { ...state, coments: action.payload }
        }
        case TracksActionsTypes.SEATCH_TRACK: {

            return { ...state, tracks: action.payload, isLoading: false }
        }
        case TracksActionsTypes.DELETE_TRACK: {

          

            return {
                ...state, 
                tracks: [...state.tracks.filter(elm => elm.id !== action.payload)],
                isLoading: false
            }
        
        }
        case TracksActionsTypes.DELETE_COMMENT_OF_TRACK: {


       
          

            return {
                ...state, 
                coments: [...state.coments.filter(elm => elm.id !== action.payload)],
                isLoading: false
            }
        
        }

        default:
            return state
    }


}