import { IAlbum, IComment, ITrack } from "./entity-interfaces";



export interface IAlbumState {

    albums: IAlbum[];
    currentAlbum: IAlbum;
    isLoading: boolean;
    Fav: IAlbum;
    error: null | string;
}



export enum AlbumAtionsTypes {

    CREAT_ALBUM = 'CREAT_ALBUM',
    GET_ALBUM = 'GET_ALBUM',
    GET_ALL_ALBUMS = 'GET_ALL_ALBUMS',
    DELETE_ALBUM = 'DELETE_ALBUM',
    ADD_TRACK_TO_ALBUM = 'ADD_TRACK_TO_ALBUM',
    ADD_TRACK_TO_FAV = 'ADD_TRACK_TO_FAV',
    ON_ALBUMS_ACTION = 'ON_ALBUMS_ACTION',
    ERROR_ALBUMS_ACTION = 'ERROR_ALBUMS_ACTION',
    GET_FAV_ALBUM = 'GET_FAV_ALBUM',
    DELETE_FROM_FAV_ALBUM = 'DELETE_FROM_FAV_ALBUM',
    DELETE_FROM_ALBUM = 'DELETE_FROM_ALBUM',
    SEATCH_TRACKS_IN_ALBUM = 'SEATCH_TRACKS_IN_ALBUM',
    GET_FAV_ALBUM_NEXT = 'GET_FAV_ALBUM_NEXT',
}


interface addTrakcToFav {

    type: AlbumAtionsTypes.ADD_TRACK_TO_FAV,
    payload: ITrack
}
interface SearchTrackInAlbum {

    type: AlbumAtionsTypes.SEATCH_TRACKS_IN_ALBUM,
    payload: any
}

interface addTrakcToAlbum {

    type: AlbumAtionsTypes.ADD_TRACK_TO_ALBUM
    payload: any
}

interface deleteAlbum {

    type: AlbumAtionsTypes.DELETE_ALBUM,
    payload: string
}

interface getAllAlbums {

    type: AlbumAtionsTypes.GET_ALL_ALBUMS,
    payload: IAlbum[]
}
interface getFavAlbum {

    type: AlbumAtionsTypes.GET_FAV_ALBUM,
    payload: IAlbum
}
interface getFavAlbumTraksNext {

    type: AlbumAtionsTypes.GET_FAV_ALBUM_NEXT,
    payload: ITrack[]
}

interface getAlbum {

    type: AlbumAtionsTypes.GET_ALBUM,
    payload: IAlbum
}

interface creatAlbum {

    type: AlbumAtionsTypes.CREAT_ALBUM
    payload: IAlbum
}

interface onAlbumsAction {

    type: AlbumAtionsTypes.ON_ALBUMS_ACTION
}

interface errroAlbumsActions {

    type: AlbumAtionsTypes.ERROR_ALBUMS_ACTION
    payload: string
}
interface deleteFromFavorite {

    type: AlbumAtionsTypes.DELETE_FROM_FAV_ALBUM
    payload: string
}
interface deleteFromAlbum {

    type: AlbumAtionsTypes.DELETE_FROM_ALBUM
    payload: any
}


export type AlbumsActions =

    addTrakcToFav |
    addTrakcToAlbum |
    deleteAlbum |
    getAllAlbums |
    getAlbum |
    creatAlbum |
    onAlbumsAction |
    errroAlbumsActions |
    getFavAlbum |
    deleteFromFavorite |
    deleteFromAlbum |
    SearchTrackInAlbum |
    getFavAlbumTraksNext
