import { IAlbumState, AlbumsActions, AlbumAtionsTypes } from "../../types/album";


const initilaState: IAlbumState = {

    albums: [],
    currentAlbum: null,
    isLoading: false,
    error: null,
    Fav: null
}

export const albumReduser = (state = initilaState, action: AlbumsActions): IAlbumState => {

    switch (action.type) {

        case AlbumAtionsTypes.ON_ALBUMS_ACTION:

            return {...state, isLoading: true}

        case AlbumAtionsTypes.CREAT_ALBUM:

            return { ...state, albums: [...state.albums, action.payload],  isLoading: false }

        case AlbumAtionsTypes.DELETE_ALBUM:

           

            return {...state, albums: [...state.albums.filter(elm => elm.id !== action.payload)],  isLoading: false}

        case AlbumAtionsTypes.DELETE_FROM_FAV_ALBUM:
            

            return {...state,  isLoading: false }

        case AlbumAtionsTypes.GET_ALBUM: 

            return {...state, currentAlbum: action.payload, isLoading: false}

        case AlbumAtionsTypes.GET_FAV_ALBUM: 

            return {...state, Fav: action.payload, isLoading: false}

       

        case AlbumAtionsTypes.GET_ALL_ALBUMS: 

            return {...state, albums: action.payload, isLoading: false}

        case AlbumAtionsTypes.ADD_TRACK_TO_FAV: 
        
            return {...state,  isLoading: false}

        case AlbumAtionsTypes.ADD_TRACK_TO_ALBUM: 

            return {...state,  isLoading: false}

        case AlbumAtionsTypes.ERROR_ALBUMS_ACTION: 

            return {...state, error: action.payload,  isLoading: false}
        default:
            return state
    }
}