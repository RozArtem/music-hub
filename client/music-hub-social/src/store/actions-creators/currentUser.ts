import { API_URL } from '../../config';
import axios from 'axios';
import { authDTO, registrationDTO } from './dto';
import { UserActions, UserActionTypes } from '../../types/currentUser';
import {Dispatch} from "redux";


export const registration = (name: string, password: string, email: string) => {
   
    return async (dispatch: Dispatch<UserActions>) => {
        try {
          
            const responce = await axios.post(`${API_URL}auth/registration`, {
                name, email, password
            })
            alert(responce.data)
        } catch (error) {
           
            console.log(error.response.data)
            alert(error.response.data.message)
        }
    }
}
    
   

export const login = (email: string, password: string) => {

    return async (dispatch: Dispatch<UserActions>) => {

        try {

           
            dispatch({ type: UserActionTypes.LOGIN_USER })
            const responce =  await axios.post(`${API_URL}auth/login`, {
                email,
                password
            })
            dispatch({ type: UserActionTypes.LOGIN_USER_SUCCESS })
            localStorage.setItem('token', responce.data)
          
        } catch (error) {

            dispatch({ type: UserActionTypes.LOGIN_USER_ERROR, payload: error.response.data.message });
            alert(error.response.data.message)
        }
    }
}


export const auth = () => {

    return async (dispatch: Dispatch<UserActions>) => {

        try {

            const responce: authDTO = await axios.get(`${API_URL}auth/auth`,  
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            dispatch({ type: UserActionTypes.AUTH_USER, paylod: responce.data.user })
         
        } catch (error) {

            dispatch({ type: UserActionTypes.LOGIN_USER_ERROR, payload:  error.response.data.message });
        }
    }
}


