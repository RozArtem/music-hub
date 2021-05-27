export interface IUser {
    id: string;
    name: string;
    email: string;
    tracks?: any[];
    albums?: any[];
}

export interface ITrack {
    id: string;
    name: string;
    audio: string;
    picture: string;
    authorID: string;
    album?: string;
    comments: IComment[];
}

export interface IComment {
    id: string;
    description: string;
    ownerID: string;
    trackID: string;
}

export interface IAlbum {
    id: string;
    name: string;
    ownerID: string;
    tracks?: ITrack[];
}


