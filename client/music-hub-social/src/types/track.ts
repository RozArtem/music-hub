import { IComment, ITrack } from "./entity-interfaces";


export interface ITrackState {
    tracks: ITrack[];
    currentTrack: ITrack | null ;
    coments: IComment[];
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
    GETING_TRACK_LOAD = 'GETING_TRACK_LOAD',
    SEATCH_TRACK = 'SEATCH_TRACK',
    ADD_COMMENT_TO_TRACK = 'ADD_COMMENT_TO_TRACK',
    GET_COMMENTS = 'GET_COMMENTS',
    DELETE_COMMENT_OF_TRACK = 'DELETE_COMMENT_OF_TRACK'

    
}


interface searchTrack {
    type: TracksActionsTypes.SEATCH_TRACK;
    payload: ITrack[]
}
interface addTrack {
    type: TracksActionsTypes.ADD_TRACK;
    payload: ITrack
}
interface addCommentToTrack {
    type: TracksActionsTypes.ADD_COMMENT_TO_TRACK;
    
}
interface getOwnTracks {
    type: TracksActionsTypes.GET_OWN_TRACKS;
    payload: ITrack[]
}
interface getCommentsTracks {
    type: TracksActionsTypes.GET_COMMENTS;
    payload: IComment[]
}
interface getOneTrack {
    type: TracksActionsTypes.GET_TRACK;
    payload: ITrack;
}
interface getingTrackLoad {
    type: TracksActionsTypes.GETING_TRACK_LOAD;
}
interface getAllTraks {
    type: TracksActionsTypes.GET_ALL_TRACKS;
    payload: ITrack[]
}
interface deletTrack {
    type: TracksActionsTypes.DELETE_TRACK;
    payload: string;
}
interface deletCommentOfTrack {
    type: TracksActionsTypes.DELETE_COMMENT_OF_TRACK;
    payload: string
    
}
interface trackErrorAction {
    type: TracksActionsTypes.TRACK_ACTION_ERROS;
    payload: string;
}
export type TracksActions =
    addTrack |
    getOwnTracks |
    getingTrackLoad |
    getAllTraks |
    deletTrack |
    trackErrorAction |
    getOneTrack |
    searchTrack |
    addCommentToTrack |
    getCommentsTracks |
    deletCommentOfTrack