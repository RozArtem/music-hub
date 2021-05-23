import { IAlbum } from "./entity-interfaces";



export interface IAlbumState {

    albums: IAlbum[];
    currentAlbum: IAlbum | null;
    isLoading: boolean;
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
    ERROR_ALBUMS_ACTION = 'ERROR_ALBUMS_ACTION'
}


interface addTrakcToFav {

    type: AlbumAtionsTypes.ADD_TRACK_TO_FAV
}

interface addTrakcToAlbum {

    type: AlbumAtionsTypes.ADD_TRACK_TO_ALBUM
}

interface deleteAlbum {

    type: AlbumAtionsTypes.DELETE_ALBUM,
    payload: string
}

interface getAllAlbums {

    type: AlbumAtionsTypes.GET_ALL_ALBUMS,
    payload: IAlbum[]
}

interface getAlbum {

    type: AlbumAtionsTypes.GET_ALBUM,
    payload: IAlbum
}

interface creatAlbum {

    type: AlbumAtionsTypes.CREAT_ALBUM
}

interface onAlbumsAction {

    type: AlbumAtionsTypes.ON_ALBUMS_ACTION
}

interface errroAlbumsActions {

    type: AlbumAtionsTypes.ERROR_ALBUMS_ACTION
    payload: string
}


export type AlbumsActions =

    addTrakcToFav |
    addTrakcToAlbum |
    deleteAlbum |
    getAllAlbums |
    getAlbum |
    creatAlbum |
    onAlbumsAction |
    errroAlbumsActions
