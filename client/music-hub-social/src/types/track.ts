import { ITrack } from "./entity-interfaces";


export interface ITrackState {
    tracks: ITrack[];
    currentTrack: ITrack;
    isLoading: boolean;
    error: null | string;
}


export enum TracksActionsTypes {

    ADD_TRACK = 'ADD_TRACK',
    GET_OWN_TRACKS = 'GET_OWN_TRACKS',
    GET_TRACK = 'GET_TRACK',
    DELETE_TRACK = 'DELETE_TRACK',
    GET_ALL_TRACKS = 'GET_ALL_TRACKS',
    TRACK_ACTION_ERROS = 'TRACK_ERROS',
    GET_TRACK_SUCCES = 'TRACK_SUCCES'

    
}


interface addTrack {
    type: TracksActionsTypes.ADD_TRACK;
    payload: ITrack
}
interface getOwnTracks {
    type: TracksActionsTypes.GET_OWN_TRACKS;
    payload: ITrack[]
}
interface getOneTrack {
    type: TracksActionsTypes.GET_TRACK;
    payload: ITrack;
}
interface getTrackSucces {
    type: TracksActionsTypes.GET_TRACK_SUCCES;
}
interface getAllTraks {
    type: TracksActionsTypes.GET_ALL_TRACKS;
    payload: ITrack[]
}
interface deletTrack {
    type: TracksActionsTypes.DELETE_TRACK;
    payload: string;
}
interface trackErrorAction {
    type: TracksActionsTypes.TRACK_ACTION_ERROS;
    payload: string;
}
export type UsersActions =
    addTrack |
    getOwnTracks |
    getTrackSucces |
    getAllTraks |
    deletTrack |
    trackErrorAction |
    getOneTrack