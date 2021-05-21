import { IUser } from "../user-interface";

export interface IAuthDTO {

    readonly user: IUser;
    readonly token: string;
}