import { IUser } from "../../../types/entity-interfaces";

export interface registrationDTO {

    readonly name: string;
    readonly email: string;
    readonly password: string;
}

export interface authDTO {
    
    readonly data: {
        readonly user: IUser;
        readonly token: string;
    }
    
   
}
