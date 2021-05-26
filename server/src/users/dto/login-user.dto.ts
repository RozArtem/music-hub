import { IsEmail, IsString, Length } from "class-validator";


export class CreatUserDTO {

    @IsString({message: "have to be string"})
    readonly name: string;
    @IsString({message: "have to be string"})
    @Length(4, 999, {message: 'have to consist min 4 symbols'})
    readonly password: string;
}