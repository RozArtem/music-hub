import { IsEmail, IsString, Length } from "class-validator";


export class CreatUserDTO {

    @IsString({message: "have to be string"})
    @IsEmail({}, {message: 'Invalid email'})
    readonly email: string;
    @IsString({message: "have to be string"})
    @Length(4, 999, {message: 'have to consist min 4 symbols'})
    readonly password: string;
}