import { API_URL } from '../../config';
import axios from 'axios';
import { Dispatch } from "redux";
import { AlbumAtionsTypes, AlbumsActions } from '../../types/album';
import { IAlbum } from '../../types/entity-interfaces';



export const getAllAlbums = () => {

    return async (dispatch: Dispatch<AlbumsActions>) => {

        try {
            dispatch({ type: AlbumAtionsTypes.ON_ALBUMS_ACTION })

            const responce: IAlbum[] = await axios.get(`${API_URL}albums`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })

            dispatch({ type: AlbumAtionsTypes.GET_ALL_ALBUMS, payload: responce })

        } catch (error) {

            dispatch({ type: AlbumAtionsTypes.ERROR_ALBUMS_ACTION, payload: error.data.message });
        }
    }
}
export const getOneAlbum = (albumID: string) => {

    return async (dispatch: Dispatch<AlbumsActions>) => {

        try {
            dispatch({ type: AlbumAtionsTypes.ON_ALBUMS_ACTION })
            const responce: IAlbum = await axios.get(`${API_URL}albums/${albumID}`,

                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            dispatch({ type: AlbumAtionsTypes.GET_ALBUM, payload: responce })

        } catch (error) {

            dispatch({ type: AlbumAtionsTypes.ERROR_ALBUMS_ACTION, payload: error.data.message });
        }
    }
}
export const deleteAlbum = (albumID: string) => {

    return async (dispatch: Dispatch<AlbumsActions>) => {

        try {
            dispatch({ type: AlbumAtionsTypes.ON_ALBUMS_ACTION })
            const responce: string = await axios.delete(`${API_URL}albums/${albumID}`,

                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            dispatch({ type: AlbumAtionsTypes.DELETE_ALBUM, payload: responce })

        } catch (error) {

            dispatch({ type: AlbumAtionsTypes.ERROR_ALBUMS_ACTION, payload: error.data.message });
        }
    }
}
export const addFavorite = (trackId: string) => {

    return async (dispatch: Dispatch<AlbumsActions>) => {

        try {
            dispatch({ type: AlbumAtionsTypes.ON_ALBUMS_ACTION })
            await axios.post(`${API_URL}albums/add-to-fav`,

                {
                    trackId
                },

                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            dispatch({ type: AlbumAtionsTypes.ADD_TRACK_TO_FAV })

        } catch (error) {

            dispatch({ type: AlbumAtionsTypes.ERROR_ALBUMS_ACTION, payload: error.data.message });
        }
    }
}
export const addTrakcToAlbum = (trackId: string, albumID: string) => {

    return async (dispatch: Dispatch<AlbumsActions>) => {

        try {
            dispatch({ type: AlbumAtionsTypes.ON_ALBUMS_ACTION })
            await axios.post(`${API_URL}albums/dd-track`,

                {
                    trackId,
                    albumID
                },

                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            dispatch({ type: AlbumAtionsTypes.ADD_TRACK_TO_ALBUM })

        } catch (error) {

            dispatch({ type: AlbumAtionsTypes.ERROR_ALBUMS_ACTION, payload: error.data.message });
        }
    }
}
export const  creatAlbum = (name: string) => {

    return async (dispatch: Dispatch<AlbumsActions>) => {

        try {
            dispatch({ type: AlbumAtionsTypes.ON_ALBUMS_ACTION })
            await axios.post(`${API_URL}albums`,

            {
                name
            },

                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            dispatch({ type: AlbumAtionsTypes.CREAT_ALBUM })

        } catch (error) {

            dispatch({ type: AlbumAtionsTypes.ERROR_ALBUMS_ACTION, payload: error.data.message });
        }
    }
}
