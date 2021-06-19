import { Controller, Delete, Param} from '@nestjs/common';


import { CommentService } from './comment.service';



@Controller('api/v1/comment')
export class CommentController {
    constructor(
        private commentService: CommentService
    ) { }


    @Delete('/:id')
    delete(@Param('id') id: string) {

        
        return this.commentService.delete(id)
    }
}
