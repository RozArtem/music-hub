import axios from "axios"
import { Dispatch } from "redux"
import { API_URL } from "../../config"
import { IComment, ITrack } from "../../types/entity-interfaces"
import { TracksActions, TracksActionsTypes } from "../../types/track"
import { IAddComment, IGetTrack, IGetTracks } from "./dto"




export const addTrack = (name: string, picture: any, audio: any) => {

    return async (dispatch: Dispatch<TracksActions>) => {
        try {


            const files = new FormData();


            files.append('picture', picture);
            files.append('audio', audio);
            files.append('name', name)

            const responce: any = await axios.post(`${API_URL}track`, files

                , {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            debugger
            dispatch({ type: TracksActionsTypes.ADD_TRACK, payload: responce.data })
            alert('New track has been uploaded')

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

export const getOneTrack = (trackID: string) => {

    return async (dispatch: Dispatch<TracksActions>) => {

        try {
            dispatch({ type: TracksActionsTypes.GETING_TRACK_LOAD })
            const responce: IGetTrack = await axios.get(`${API_URL}track/${trackID}`
            )
            dispatch({ type: TracksActionsTypes.GET_TRACK, payload: responce.data })
            dispatch({ type: TracksActionsTypes.GET_COMMENTS, payload: responce.data.comments })
        } catch (error) {

            dispatch({ type: TracksActionsTypes.TRACK_ACTION_ERROS, payload: error });
        }
    }
}

export const getAll = (count = 10, offset = 0) => {

    return async (dispatch: Dispatch<TracksActions>) => {

        try {

            dispatch({ type: TracksActionsTypes.GETING_TRACK_LOAD })
            const responce: IGetTracks = await axios.get(`${API_URL}track?count=${count}&offset=${offset}`)

            dispatch({ type: TracksActionsTypes.GET_ALL_TRACKS, payload: responce.data })

        } catch (error) {

            dispatch({ type: TracksActionsTypes.TRACK_ACTION_ERROS, payload: error });
        }
    }
}

export const search = (query: string) => {

    return async (dispatch: Dispatch<TracksActions>) => {

        try {
            dispatch({ type: TracksActionsTypes.GETING_TRACK_LOAD })
            const responce: any = await axios.get(`${API_URL}track/search/${query}`)
            dispatch({ type: TracksActionsTypes.SEATCH_TRACK, payload: responce.data })

        } catch (error) {

            dispatch({ type: TracksActionsTypes.TRACK_ACTION_ERROS, payload: error });
        }
    }
}



export const deleteOne = (trackID: string) => {

    return async (dispatch: Dispatch<TracksActions>) => {

        try {

            const responce = await axios.delete(`${API_URL}track/${trackID}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch({ type: TracksActionsTypes.DELETE_TRACK, payload: responce.data })

        } catch (error) {

            dispatch({ type: TracksActionsTypes.TRACK_ACTION_ERROS, payload: error });
        }
    }
}
export const deleteComment = (commentID: string) => {

    return async (dispatch: Dispatch<TracksActions>) => {

        try {
            const responce = await axios.delete(`${API_URL}comment/${commentID}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch({ type: TracksActionsTypes.DELETE_COMMENT_OF_TRACK, payload: responce.data })

        } catch (error) {

            dispatch({ type: TracksActionsTypes.TRACK_ACTION_ERROS, payload: error });
        }
    }
}



export const addCommentToTrack = (description: string, trackID: string) => {

    return async (dispatch: Dispatch<TracksActions>) => {

        try {

            const responce: IAddComment = await axios.post(`${API_URL}track/${trackID}/add-comment`, {

                description

            },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })


            dispatch({ type: TracksActionsTypes.ADD_COMMENT_TO_TRACK, payload: responce.data })

        } catch (error) {

            dispatch({ type: TracksActionsTypes.TRACK_ACTION_ERROS, payload: error.data });
        }
    }
}

export const increaseOffset = (): TracksActions => {
    return { type: TracksActionsTypes.INCREASE_OFFSET }
}
export const decreaseOffset = (): TracksActions => {
    return { type: TracksActionsTypes.DECREASE_OFFSET }
}
export const nullifyOffset = (): TracksActions => {
    return { type: TracksActionsTypes.NULLIFY_OFFSET }
}