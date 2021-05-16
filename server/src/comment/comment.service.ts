import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './comment.model';
import { v4 as uuidv4 } from 'uuid';
import { AddCommentDTO } from './dto/add-comment.dto';


@Injectable()
export class CommentService {
    constructor(
        @InjectModel(Comment)
        private commentRepository: typeof Comment,
    ) { }

    async create(dto: AddCommentDTO, trackID_fromQuery: string): Promise<Comment> {


        const commentID = uuidv4()
        const comment = await this.commentRepository.create(
            { ...dto, id: commentID, trackID: trackID_fromQuery }
        )

        return comment
    }

    async delete(id: string): Promise<string> {

        const comment = await this.commentRepository.findOne({ where: { id } })

        comment.destroy()

        return comment.id
    }

    async deleteWithTrack(trackID: string): Promise<void> {

        await this.commentRepository.destroy({ where: { trackID } })
    }
}
