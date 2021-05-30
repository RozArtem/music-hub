import { API_URL } from '../../config';
import axios from 'axios';
import { Dispatch } from "redux";
import { AlbumAtionsTypes, AlbumsActions } from '../../types/album';
import { IAlbum } from '../../types/entity-interfaces';
import { IFethcAlbum, IFethcAlbums, IGetTracks } from './dto';



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

            dispatch({ type: AlbumAtionsTypes.ERROR_ALBUMS_ACTION, payload: error.response.data});
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
            dispatch({ type: AlbumAtionsTypes.ADD_TRACK_TO_FAV , payload: responce.data})

        } catch (error) {

            dispatch({ type: AlbumAtionsTypes.ERROR_ALBUMS_ACTION, payload: error.data});
        }
    }
}
export const deleteFromFavorite = (trackId: string) => {

    return async (dispatch: Dispatch<AlbumsActions>) => {

        try {
            dispatch({ type: AlbumAtionsTypes.ON_ALBUMS_ACTION })
          const responce =   await axios.delete(`${API_URL}albums/delete-from-fav?trackID=${trackId}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            dispatch({ type: AlbumAtionsTypes.DELETE_FROM_FAV_ALBUM , payload: responce.data})

        } catch (error) {

            dispatch({ type: AlbumAtionsTypes.ERROR_ALBUMS_ACTION, payload: error.data.message });
        }
    }
}

export const deleteFromAlbum = (trackId: string) => {

    return async (dispatch: Dispatch<AlbumsActions>) => {

        try {
            dispatch({ type: AlbumAtionsTypes.ON_ALBUMS_ACTION })
            await axios.delete(`${API_URL}albums/delete-from-album?trackID=${trackId}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            dispatch({ type: AlbumAtionsTypes.DELETE_FROM_ALBUM })

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
            const responce  =  await axios.post(`${API_URL}albums`,

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
