import { API_URL } from '../../config';
import axios from 'axios';
import {Dispatch} from "redux";
import { UsersActions, UsersActionTypes } from '../../types/users';
import { IUser } from '../../types/entity-interfaces';

export const getUserProfile = (userId: string) => {

    return async (dispatch: Dispatch<UsersActions>) => {

        try {
            dispatch({ type: UsersActionTypes.FETCH_PROFILE})
            const responce: IUser = await axios.get(`${API_URL}/users/${userId}`)
            dispatch({ type: UsersActionTypes.FETCH_CURRENT_PROFILE_SUCCESS, payload: responce })

        } catch (error) {

            dispatch({ type: UsersActionTypes.FETCH_CURRENT_PROFILE_ERROR, payload: error });
        }
    }
}

export const getAllUsersProfiles = (count : number, offset: number) => {

    return async (dispatch: Dispatch<UsersActions>) => {

        try {
            dispatch({ type: UsersActionTypes.FETCH_PROFILES})
            const responce: IUser[]= await axios.get(`${API_URL}/users?count=${count}&offse=${offset}`)
            dispatch({ type: UsersActionTypes.FETCH_PROFILES_SUCCESS, payload: responce })

        } catch (error) {

            dispatch({ type: UsersActionTypes.FETCH_PROFILES_ERROR, payload: error });
        }
    }
}


