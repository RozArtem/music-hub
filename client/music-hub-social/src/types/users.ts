import { IUser } from "./entity-interfaces";


export interface IUsersState {
    users?: IUser[];
    currentUser?: IUser | null;
    isAuth: boolean;
    isLoading: boolean;
    error: null | string;

}


export enum UsersActionTypes {
    LOGIN_USER = 'SET_USER',
    LOGOUT_USER = 'LOGOUT_USER',
    FETCH_PROFILES = 'FETCH_PROFILES',
    FETCH_PROFILE = 'FETCH_PROFILE',
    FETCH_CURRENT_PROFILE_SUCCESS = 'FETCH_CURRENT_PROFILE_SUCCESS',
    FETCH_CURRENT_PROFILE_ERROR = 'FETCH_CURRENT_PROFILE_ERROR',
    FETCH_PROFILES_SUCCESS = 'FETCH_PROFILES_SUCCESS',
    FETCH_PROFILES_ERROR = 'FETCH_PROFILES_ERROR',

}

interface FetchProfilesAction {
    type: UsersActionTypes.FETCH_PROFILES;
}
interface FetchProfilesSuccessAction {
    type: UsersActionTypes.FETCH_PROFILES_SUCCESS;
    payload: IUser[]
}
interface FetchProfilesErrorAction {
    type: UsersActionTypes.FETCH_PROFILES_ERROR;
    payload: string;
}
interface FetchProfileAction {
    type: UsersActionTypes.FETCH_PROFILE;
}
interface FetchCurrentProfileSuccessAction {
    type: UsersActionTypes.FETCH_CURRENT_PROFILE_SUCCESS;
    payload: IUser[]
}
interface FetchCurrentProfileErrorAction {
    type: UsersActionTypes.FETCH_PROFILES_ERROR;
    payload: string;
}
export type UsersAction =
    FetchProfilesAction |
    FetchProfilesSuccessAction |
    FetchProfilesErrorAction |
    FetchProfileAction |
    FetchCurrentProfileSuccessAction |
    FetchCurrentProfileErrorAction