import { IUser } from "./entity-interfaces";


export interface IUsersState {
    users: IUser[];
    currentProfile: IUser;
    isLoading: boolean;
    error: null | string;

}


export enum UsersActionTypes {

    FETCH_PROFILES = 'FETCH_PROFILES',
    FETCH_PROFILE = 'FETCH_PROFILE',
    FETCH_CURRENT_PROFILE_SUCCESS = 'FETCH_CURRENT_PROFILE_SUCCESS',
    FETCH_CURRENT_PROFILE_ERROR = 'FETCH_CURRENT_PROFILE_ERROR',
    FETCH_PROFILES_SUCCESS = 'FETCH_PROFILES_SUCCESS',
    FETCH_PROFILES_ERROR = 'FETCH_PROFILES_ERROR',
    DELETE_TRACK_OF_CURRENT_USER = 'DELETE_TRACK_OF_CURRENT_USER'

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
interface DeleteTrackFromCurrentProfile {
    type: UsersActionTypes.DELETE_TRACK_OF_CURRENT_USER;
    payload: string;
}
interface FetchProfileAction {
    type: UsersActionTypes.FETCH_PROFILE;
}
interface FetchCurrentProfileSuccessAction {
    type: UsersActionTypes.FETCH_CURRENT_PROFILE_SUCCESS;
    payload: IUser
}
interface FetchCurrentProfileErrorAction {
    type: UsersActionTypes.FETCH_CURRENT_PROFILE_ERROR;
    payload: string;
}
export type UsersActions =
    FetchProfilesAction |
    FetchProfilesSuccessAction |
    FetchProfilesErrorAction |
    FetchProfileAction |
    FetchCurrentProfileSuccessAction |
    FetchCurrentProfileErrorAction |
    DeleteTrackFromCurrentProfile