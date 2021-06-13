import { API_URL } from '../../config';
import axios from 'axios';
import { Dispatch } from "redux";
import { AlbumAtionsTypes, AlbumsActions } from '../../types/album';
import { IAlbum, ITrack } from '../../types/entity-interfaces';
import { IFethcAlbum, IFethcAlbums, IGetTracks, IGetTracksForAlbum } from './dto';
import { Console } from 'console';



export const getAllAlbums = () => {

    return async (dispatch: Dispatch<AlbumsActions>) => {

        try {
            dispatch({ type: AlbumAtionsTypes.ON_ALBUMS_ACTION })

            const responce: IFethcAlbums = await axios.get(`${API_URL}albums`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })

            dispatch({ type: AlbumAtionsTypes.GET_ALL_ALBUMS, payload: responce.data })


        } catch (error) {

            dispatch({ type: AlbumAtionsTypes.ERROR_ALBUMS_ACTION, payload: error.response.data });
        }
    }
}

export const getOneAlbum = (albumID: string, count = 10, offset = 0) => {

    return async (dispatch: Dispatch<AlbumsActions>) => {

        try {
            dispatch({ type: AlbumAtionsTypes.ON_ALBUMS_ACTION })
            const responce: IFethcAlbum = await axios.get(`${API_URL}albums/${albumID}?count=${count}&offset=${offset}`,

                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            dispatch({ type: AlbumAtionsTypes.GET_ALBUM, payload: responce.data })

        } catch (error) {

            dispatch({ type: AlbumAtionsTypes.ERROR_ALBUMS_ACTION, payload: error.data.message });
        }
    }
}

export const getFavAlbum = () => {

    return async (dispatch: Dispatch<AlbumsActions>) => {

        try {
            dispatch({ type: AlbumAtionsTypes.ON_ALBUMS_ACTION })
            const responce: IFethcAlbum = await axios.get(`${API_URL}albums/fav`,

                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            dispatch({ type: AlbumAtionsTypes.GET_FAV_ALBUM, payload: responce.data })

        } catch (error) {

            dispatch({ type: AlbumAtionsTypes.ERROR_ALBUMS_ACTION, payload: error.data });
        }
    }
}
export const getFavAlbumTraksNext = (count = 10, offset = 0) => {

    return async (dispatch: Dispatch<AlbumsActions>) => {

        try {
            dispatch({ type: AlbumAtionsTypes.ON_ALBUMS_ACTION })
            const responce: IGetTracksForAlbum = await axios.get(`${API_URL}albums/fav?count=${count}&offset=${offset}`,

                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            dispatch({ type: AlbumAtionsTypes.GET_FAV_ALBUM_NEXT, payload: responce.data })

        } catch (error) {

            dispatch({ type: AlbumAtionsTypes.ERROR_ALBUMS_ACTION, payload: error.data });
        }
    }
}
export const deleteAlbum = (albumID: string) => {

    return async (dispatch: Dispatch<AlbumsActions>) => {

        try {
            dispatch({ type: AlbumAtionsTypes.ON_ALBUMS_ACTION })
            const responce = await axios.delete(`${API_URL}albums/${albumID}`,

                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            dispatch({ type: AlbumAtionsTypes.DELETE_ALBUM, payload: responce.data })

        } catch (error) {

            dispatch({ type: AlbumAtionsTypes.ERROR_ALBUMS_ACTION, payload: error.data });
        }
    }
}
export const addFavorite = (trackId: string) => {

    return async (dispatch: Dispatch<AlbumsActions>) => {

        try {
            dispatch({ type: AlbumAtionsTypes.ON_ALBUMS_ACTION })
            const responce = await axios.post(`${API_URL}albums/add-to-fav`,

                {
                    trackId
                },

                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            dispatch({ type: AlbumAtionsTypes.ADD_TRACK_TO_FAV, payload: responce.data })

        } catch (error) {

            dispatch({ type: AlbumAtionsTypes.ERROR_ALBUMS_ACTION, payload: error.data });
        }
    }
}
export const deleteFromFavorite = (trackId: string) => {

    return async (dispatch: Dispatch<AlbumsActions>) => {

        try {
            dispatch({ type: AlbumAtionsTypes.ON_ALBUMS_ACTION })
            const responce = await axios.delete(`${API_URL}albums/delete-from-fav?trackID=${trackId}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            dispatch({ type: AlbumAtionsTypes.DELETE_FROM_FAV_ALBUM, payload: responce.data })

        } catch (error) {

            dispatch({ type: AlbumAtionsTypes.ERROR_ALBUMS_ACTION, payload: error.data.message });
        }
    }
}


export const searchInAlbum = (albumID: string, query: string) => {

    return async (dispatch: Dispatch<AlbumsActions>) => {

        try {
            dispatch({ type: AlbumAtionsTypes.ON_ALBUMS_ACTION })
            const responce: any = await axios.get(`${API_URL}track/search/${albumID}/tracks/${query}`,

                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )
            dispatch({ type: AlbumAtionsTypes.SEATCH_TRACKS_IN_ALBUM, payload: responce.data })

        } catch (error) {

            dispatch({ type: AlbumAtionsTypes.ERROR_ALBUMS_ACTION, payload: error });
        }
    }
}

export const deleteFromAlbum = (albumID: string, trackID: string) => {

    return async (dispatch: Dispatch<AlbumsActions>) => {

        try {
            dispatch({ type: AlbumAtionsTypes.ON_ALBUMS_ACTION })
            const responce = await axios.delete(`${API_URL}albums/delete-from-album?albumID=${albumID}&trackID=${trackID}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })

            dispatch({ type: AlbumAtionsTypes.DELETE_FROM_ALBUM, payload: responce.data })

        } catch (error) {

            dispatch({ type: AlbumAtionsTypes.ERROR_ALBUMS_ACTION, payload: error.data.message });
        }
    }
}

export const addTrakcToAlbum = (trackId: string, albumID: string) => {

    return async (dispatch: Dispatch<AlbumsActions>) => {

        try {
            dispatch({ type: AlbumAtionsTypes.ON_ALBUMS_ACTION })

            const responce = await axios.post(`${API_URL}albums/add-track`,

                {
                    trackId,
                    albumID
                },

                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })


            dispatch({ type: AlbumAtionsTypes.ADD_TRACK_TO_ALBUM, payload: responce.data })

        } catch (error) {

            dispatch({ type: AlbumAtionsTypes.ERROR_ALBUMS_ACTION, payload: error.data });
        }
    }
}
export const creatAlbum = (name: string) => {

    return async (dispatch: Dispatch<AlbumsActions>) => {

        try {
            dispatch({ type: AlbumAtionsTypes.ON_ALBUMS_ACTION })
            const responce = await axios.post(`${API_URL}albums`,

                {
                    name
                },

                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })

            dispatch({ type: AlbumAtionsTypes.CREAT_ALBUM, payload: responce.data })


        } catch (error) {

            dispatch({ type: AlbumAtionsTypes.ERROR_ALBUMS_ACTION, payload: error });
        }
    }
}
