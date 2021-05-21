import { IComment } from "./entity-interfaces";



export interface ITrackState {
    tracks: IComment[];
    currentTrack: IComment;
    isLoading: boolean;
    error: null | string;
}