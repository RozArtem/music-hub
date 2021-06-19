
import { IUsersState, UsersActions, UsersActionTypes } from "../../types/users"




const initialState: IUsersState = {
    users: [],
    currentProfile: {
        id: '',
        name: '',
        email: '',
        tracks: []
    },
    isLoading: false,
    error: null
}


export const usersReducer = (state = initialState, action: UsersActions): IUsersState => {

    switch (action.type) {

        case UsersActionTypes.FETCH_PROFILES:

            return { ...state, isLoading: true }

        case UsersActionTypes.FETCH_PROFILES_SUCCESS:

            return { ...state, users: action.payload, isLoading: false }

        case UsersActionTypes.DELETE_TRACK_OF_CURRENT_USER:

            return {
                ...state,
                currentProfile: {
                    ...state.currentProfile,
                    tracks: [...state.currentProfile?.tracks?.filter(item => item.id !== action.payload)]
                }
            }
        case UsersActionTypes.SEAR_OWN_TRACKS:

            return {
                ...state,
                currentProfile: {
                    ...state.currentProfile,
                    tracks: action.payload
                }
            }
        case UsersActionTypes.GET_NEXT_TRACKS_USER:

            return {
                ...state,
                currentProfile: {
                    ...state.currentProfile,
                    tracks: [ ...state.currentProfile.tracks, ...action.payload.tracks]
                }
            }


        case UsersActionTypes.FETCH_PROFILES_ERROR:

            return { ...state, error: action.payload, users: [] }

        case UsersActionTypes.FETCH_PROFILE:

            return { ...state, isLoading: true }

        case UsersActionTypes.FETCH_CURRENT_PROFILE_SUCCESS:

            return { ...state, currentProfile: action.payload, isLoading: false }

        case UsersActionTypes.FETCH_CURRENT_PROFILE_ERROR:

            return { ...state, error: action.payload }

        default:
            return state
    }

}
