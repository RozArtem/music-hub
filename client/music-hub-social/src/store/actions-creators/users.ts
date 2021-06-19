import { API_URL } from '../../config';
import axios from 'axios';
import { Dispatch } from "redux";
import { UsersActions, UsersActionTypes } from '../../types/users';
import { IFethcUser, IFethcUsers, IGetTracks } from './dto';

export const getUserProfile = (userId: string) => {

    return async (dispatch: Dispatch<UsersActions>) => {

        try {
            dispatch({ type: UsersActionTypes.FETCH_PROFILE })
            const responce: IFethcUser = await axios.get(`${API_URL}api/v1/users/${userId}`)
            dispatch({ type: UsersActionTypes.FETCH_CURRENT_PROFILE_SUCCESS, payload: responce.data })

        } catch (error) {

            dispatch({ type: UsersActionTypes.FETCH_CURRENT_PROFILE_ERROR, payload: error });
        }
    }
}


export const searchUserOwnTraks = (userID: string, query: string) => {

    return async (dispatch: Dispatch<UsersActions>) => {

        try {
            dispatch({ type: UsersActionTypes.FETCH_PROFILE })
            const responce: any = await axios.get(`${API_URL}api/v1/track/search/${userID}/own-tracks/${query}`)
            dispatch({ type: UsersActionTypes.SEAR_OWN_TRACKS, payload: responce.data })

        } catch (error) {

            dispatch({ type: UsersActionTypes.FETCH_PROFILES_ERROR, payload: error });
        }
    }
}
export const DeleteTrackFromCurrentProfile = (trackID: string) => {

    return async (dispatch: Dispatch<UsersActions>) => {

        try {

            const responce = await axios.delete(`${API_URL}api/v1/track/${trackID}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch({ type: UsersActionTypes.DELETE_TRACK_OF_CURRENT_USER, payload: responce.data })

        } catch (error) {

            dispatch({ type: UsersActionTypes.FETCH_PROFILES_ERROR, payload: error });
        }
    }
}


export const getAllUsersProfiles = (count: number, offset: number) => {

    return async (dispatch: Dispatch<UsersActions>) => {

        try {
            dispatch({ type: UsersActionTypes.FETCH_PROFILES })
            const responce: IFethcUsers = await axios.get(`${API_URL}api/v1/users?count=${count}&offset=${offset}`)
            dispatch({ type: UsersActionTypes.FETCH_PROFILES_SUCCESS, payload: responce.data })

        } catch (error) {

            dispatch({ type: UsersActionTypes.FETCH_PROFILES_ERROR, payload: error });
        }
    }
}


export const getNextForUser = (count = 10, offset = 0, userID: string) => {

    return async (dispatch: Dispatch<UsersActions>) => {

        try {

            dispatch({ type: UsersActionTypes.FETCH_PROFILES })
            const responce: IGetTracks = await axios.get(
                `${API_URL}api/v1/track/${userID}/user-added?count=${count}&offset=${offset}`
            )

            dispatch({ type: UsersActionTypes.GET_NEXT_TRACKS_USER, payload: responce.data })

        } catch (error) {

            dispatch({ type: UsersActionTypes.FETCH_PROFILES_ERROR, payload: error });
        }
    }
}