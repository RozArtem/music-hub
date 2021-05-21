import { IUserState, UserActions, UserActionTypes } from "../../types/currentUser"


const initialState: IUserState = {
    currentUser: null,
    isAuth: false,
    error: null
}


export const usersReducer = (state = initialState, action: UserActions): IUserState => {

    switch (action.type) {

        case UserActionTypes.LOGIN_USER:
            
            return { currentUser: null, isAuth: false, error: null }

        case UserActionTypes.LOGIN_USER_SUCCESS:

            return { currentUser: action.payload, isAuth: true, error: null }

        case UserActionTypes.LOGIN_USER_ERROR:

            return { currentUser: null, isAuth: false, error: action.payload }

        case UserActionTypes.LOGOUT_USER:

            return { currentUser: null, isAuth: false, error: null }

        default:
            return state
    }

}
