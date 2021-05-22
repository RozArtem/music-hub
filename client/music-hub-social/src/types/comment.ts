import { IComment } from "./entity-interfaces";



export interface ICommentState {
    tracks: IComment[];
    currentTrack: IComment;
    isLoading: boolean;
    error: null | string;
}