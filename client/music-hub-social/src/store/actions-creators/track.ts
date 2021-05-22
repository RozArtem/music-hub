import axios from "axios"
import { Dispatch } from "redux"
import { API_URL } from "../../config"
import { ITrack } from "../../types/entity-interfaces"
import { TracksActions, TracksActionsTypes } from "../../types/track"




export const addTrack = (name: string, formData: FormData) => {

    return async (dispatch: Dispatch<TracksActions>) => {

        try {

            const responce: ITrack = await axios.post(`${API_URL}`, {
                name,
                formData
            },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            dispatch({ type: TracksActionsTypes.ADD_TRACK, payload: responce })

        } catch (error) {

            dispatch({ type: TracksActionsTypes.TRACK_ACTION_ERROS, payload: error });
        }
    }
}

export const getOwnTrakc = () => {

    return async (dispatch: Dispatch<TracksActions>) => {

        try {
            dispatch({ type: TracksActionsTypes.GETING_TRACK_LOAD })
            const responce: ITrack[] = await axios.get(`${API_URL}/track/my-added`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch({ type: TracksActionsTypes.GET_OWN_TRACKS, payload: responce })

        } catch (error) {

            dispatch({ type: TracksActionsTypes.TRACK_ACTION_ERROS, payload: error });
        }
    }
}

export const getOne = (trackID: string) => {

    return async (dispatch: Dispatch<TracksActions>) => {

        try {
            dispatch({ type: TracksActionsTypes.GETING_TRACK_LOAD })
            const responce: ITrack = await axios.get(`${API_URL}/track/${trackID}`)
            dispatch({ type: TracksActionsTypes.GET_TRACK, payload: responce })

        } catch (error) {

            dispatch({ type: TracksActionsTypes.TRACK_ACTION_ERROS, payload: error });
        }
    }
}

export const getAll = () => {

    return async (dispatch: Dispatch<TracksActions>) => {

        try {
            dispatch({ type: TracksActionsTypes.GETING_TRACK_LOAD })
            const responce: ITrack[] = await axios.get(`${API_URL}/track`)
            dispatch({ type: TracksActionsTypes.GET_ALL_TRACKS, payload: responce })

        } catch (error) {

            dispatch({ type: TracksActionsTypes.TRACK_ACTION_ERROS, payload: error });
        }
    }
}

export const search = (query: string) => {

    return async (dispatch: Dispatch<TracksActions>) => {

        try {
            dispatch({ type: TracksActionsTypes.GETING_TRACK_LOAD })
            const responce: ITrack[] = await axios.get(`${API_URL}/track?name=${query}`)
            dispatch({ type: TracksActionsTypes.SEATCH_TRACK, payload: responce })

        } catch (error) {

            dispatch({ type: TracksActionsTypes.TRACK_ACTION_ERROS, payload: error });
        }
    }
}

export const deleteOne = (trackID: string) => {

    return async (dispatch: Dispatch<TracksActions>) => {

        try {

            const responce: string = await axios.delete(`${API_URL}/track/${trackID}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch({ type: TracksActionsTypes.DELETE_TRACK, payload: responce })

        } catch (error) {

            dispatch({ type: TracksActionsTypes.TRACK_ACTION_ERROS, payload: error });
        }
    }
}

