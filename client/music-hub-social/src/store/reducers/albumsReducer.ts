import { IAlbumState, AlbumsActions, AlbumAtionsTypes } from "../../types/album";


const initilaState: IAlbumState = {

    albums: [],
    currentAlbum: {
        id: '',
        name: '',
        ownerID: '',
        traks: []
    },
    isLoading: false,
    error: null,
    Fav: {
        id: '',
        name: '',
        ownerID: '',
        traks: []
    }
}

export const albumReduser = (state = initilaState, action: AlbumsActions): IAlbumState => {

    switch (action.type) {

        case AlbumAtionsTypes.ON_ALBUMS_ACTION:

            return { ...state, isLoading: true }

        case AlbumAtionsTypes.CREAT_ALBUM:

            return { ...state, albums: [...state.albums, action.payload], isLoading: false }

        case AlbumAtionsTypes.DELETE_ALBUM:



            return { ...state, albums: [...state.albums.filter(elm => elm.id !== action.payload)], isLoading: false }

        case AlbumAtionsTypes.DELETE_FROM_FAV_ALBUM:


            return {
                ...state, isLoading: false,
                Fav: { ...state.Fav, traks: [...state.Fav.traks.filter(elm => elm.id !== action.payload)] }
            }
        case AlbumAtionsTypes.DELETE_FROM_ALBUM: {

            const albums = [...state.albums]
            const indexOfTargetAlbum = albums.findIndex((item) => item.id === action.payload.album.id)
            const targetAlbum = albums[indexOfTargetAlbum]
            const newAlbum = {
                ...targetAlbum,
                traks: [...targetAlbum.traks.filter(elm => elm.id !== action.payload.track.id)]
            }
            albums[indexOfTargetAlbum] = newAlbum




            return {
                ...state, isLoading: false,
                albums: albums



            }
        }

        case AlbumAtionsTypes.GET_ALBUM:

            return { ...state, currentAlbum: action.payload, isLoading: false }

        case AlbumAtionsTypes.GET_FAV_ALBUM:

            return { ...state, Fav: action.payload, isLoading: false }



        case AlbumAtionsTypes.GET_ALL_ALBUMS:

            return { ...state, albums: action.payload, isLoading: false }

        case AlbumAtionsTypes.ADD_TRACK_TO_FAV:



            return {
                ...state, isLoading: false,
                Fav: { ...state.Fav, traks: [...state.Fav.traks, action.payload] }
            }


        case AlbumAtionsTypes.ADD_TRACK_TO_ALBUM: {

            const albums = [...state.albums]
            const indexOfTargetAlbum = albums.findIndex((item) => item.id === action.payload.album.id)
            const targetAlbum = albums[indexOfTargetAlbum]
            const newAlbum = { ...targetAlbum, traks: [...targetAlbum.traks, action.payload.track] }
            albums[indexOfTargetAlbum] = newAlbum




            return {
                ...state, isLoading: false,
                albums: albums



            }
        }

        case AlbumAtionsTypes.ERROR_ALBUMS_ACTION:

            return { ...state, error: action.payload, isLoading: false }
        default:
            return state
    }
}