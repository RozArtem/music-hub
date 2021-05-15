import { Body, Controller, Delete, Param, Post, Query } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreatCommentDTO } from './dto/creat-comment.dto';

@Controller('comment')
export class CommentController {
    constructor(
        private commentService: CommentService
    ) { }


    @Post('/:id')
    creat(
        @Param('id') id: string,
        @Body() dto: CreatCommentDTO
    ) {

        return this.commentService.create(dto, id)
    }
    @Delete('/:id')
    delete(@Param('id') id: string) {

        return this.commentService.delete(id)
    }
}
