import { ITrack } from "./entity-interfaces";


export interface ITrackState {
    tracks: ITrack[];
    currentTrack: ITrack;
    isLoading: boolean;
    error: null | string;
}