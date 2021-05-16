import { Body, Controller, Delete, Get, Param, Post,  Req,  UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { AddCommentDTO } from 'src/comment/dto/add-comment.dto';
import { CreatTackDTO } from './dto/creat-track.dto';
import { TrackService } from './track.service';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/auth/user.decorator';
import { IUser } from 'src/auth/user-interface';


@Controller('track')
export class TrackController {

    constructor(
        private trackService: TrackService
    ) { }

    @UseGuards(JwtAuthGuard) 
    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
        { name: 'audio', maxCount: 1 },
    ]))
    create(@UploadedFiles() files, @Body() dto: CreatTackDTO, @User() user : IUser) {
        
        const { picture, audio } = files
        return this.trackService.creat(dto, picture[0], audio[0], user);
    }
    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.trackService.delete(id)
    }
    @Get('/:id')
    getOne(@Param('id') id: string) {

        return this.trackService.getOne(id)
    }
    @Get()
    getAll( @Req() request: Request) {

        console.log(request)
        return this.trackService.getAll()
    }
    @UseGuards(JwtAuthGuard)
    @Post('/:id/add-comment')
    addComment(@Param('id') id:string, @Body() dto: AddCommentDTO,  @User() user: IUser) {

      
        return this.trackService.addComment(dto, id)
    }
   

}
