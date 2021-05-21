import { API_URL } from '../../config';
import axios from 'axios';
import { authDTO, registrationDTO } from './dto';
import { UserActions, UserActionTypes } from '../../types/currentUser';
import { Dispatch } from 'react';


export const registration = async (user: registrationDTO) => {

    try {

        const responce = await axios.post(`${API_URL}auth/registration`, {
            user
        })
        alert(responce)
    } catch (error) {

        alert(error.response.data.message)
    }
}

export const login = (login: string, password: string) => {

    return async (dispatch: Dispatch<UserActions>) => {

        try {
            dispatch({ type: UserActionTypes.LOGIN_USER })
            await axios.post(`${API_URL}auth/login`, {
                login,
                password
            })
            dispatch({ type: UserActionTypes.LOGIN_USER_SUCCESS })

        } catch (error) {

            dispatch({ type: UserActionTypes.LOGIN_USER_ERROR, payload: error.data.message });
        }
    }
}


export const auth = () => {

    return async (dispatch: Dispatch<UserActions>) => {

        try {

            const responce: authDTO = await axios.get(`${API_URL}auth/auth`)
            dispatch({ type: UserActionTypes.AUTH_USER, paylod: responce.user })
            localStorage.setItem('token', responce.token)
        } catch (error) {

            dispatch({ type: UserActionTypes.LOGIN_USER_ERROR, payload: error.data.message });
        }
    }
}


