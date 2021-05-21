import { IUsersState, UsersActionTypes } from "../../types/users"



const initialState : IUsersState = {
    users: [],
    currentUser: null ,
    isAuth: false,
    isLoading: false,
    error: null
}


export const usersReducer = (state = initialState, action : UsersActionTypes) => {
    
    switch (action) {
       
        
        default:
            return state
    }

}
