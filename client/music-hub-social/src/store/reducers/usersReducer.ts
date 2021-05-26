
import { IUsersState, UsersActions, UsersActionTypes } from "../../types/users"




const initialState : IUsersState = {
    users: [],
    currentUser: null ,
    isLoading: false,
    error: null
}


export const usersReducer = (state = initialState, action : UsersActions): IUsersState => {
    
    switch (action.type) {

        case UsersActionTypes.FETCH_PROFILES:
            
            return {...state, isLoading: true }

        case UsersActionTypes.FETCH_PROFILES_SUCCESS:
            
            return {...state, users: action.payload, isLoading: false}

        case UsersActionTypes.FETCH_PROFILES_ERROR:
            
            return {...state, error: action.payload, users: []}

        case UsersActionTypes.FETCH_PROFILE:
            
            return {...state, isLoading: true}

        case UsersActionTypes.FETCH_CURRENT_PROFILE_SUCCESS:
            
          return {...state, currentUser: action.payload, isLoading: false}

        case UsersActionTypes.FETCH_CURRENT_PROFILE_ERROR:
            
            return {...state, error: action.payload}

        default:
            return state
    }

}
