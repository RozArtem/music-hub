import { IsString } from "class-validator";

export class AddCommentDTO {

    @IsString({message: 'have to be string'})
    readonly description: string;
}