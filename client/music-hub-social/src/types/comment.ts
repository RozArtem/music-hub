import { IComment } from "./entity-interfaces";



export interface ICommentState {
    comments: IComment[];
    currentTrack: IComment;
    isLoading: boolean;
    error: null | string;
}