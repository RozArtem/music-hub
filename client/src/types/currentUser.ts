
import { IUser } from "./entity-interfaces";


export interface IUserState {
    currentUser: IUser | null;
    isAuth: boolean;
    error: null | string;

}


export enum UserActionTypes {
    
    AUTH_USER = 'AUTH_USER',
    LOGIN_USER = 'LOGIN_USER',
    LOGOUT_USER = 'LOGOUT_USER',
    LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS',
    LOGIN_USER_ERROR = 'LOGIN_USER_ERROR',
  

}

interface authUserAction {
    type: UserActionTypes.AUTH_USER;
    paylod: IUser
}

interface loginUserAction {
    type: UserActionTypes.LOGIN_USER;
}
interface loginUserSuccessAction {
    
    type: UserActionTypes.LOGIN_USER_SUCCESS;
  
}
interface loginUserErrorAction {
    type: UserActionTypes.LOGIN_USER_ERROR;
    payload: string;
}
interface logoutUserAction {
    type: UserActionTypes.LOGOUT_USER;
}


export type UserActions =
    loginUserAction |
    loginUserSuccessAction |
    loginUserErrorAction |
    logoutUserAction |
    authUserAction
   