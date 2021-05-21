import { IAlbum } from "./entity-interfaces";



export interface IAlbumState {

    albums: IAlbum[];
    currentAlbum: IAlbum;
    isLoading: boolean;
    error: null | string;
}