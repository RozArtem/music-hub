import { IsString } from "class-validator";

export class CreatTackDTO {

    @IsString({message: 'have to be string'})
    readonly name: string;
    
}