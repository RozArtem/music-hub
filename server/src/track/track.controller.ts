import { Body, Controller, Delete, Get, Param, Post,  Query,  Req,  UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
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
        return  this.trackService.creat(dto, picture[0], audio[0], user);
    }

    @UseGuards(JwtAuthGuard) 
    @Delete('/:id')
    delete(@Param('id') id: string, @User() user : IUser) {
        return this.trackService.delete(id, user)
    }

    @Get('/:id')
    getOne(@Param('id') id: string) {

        return this.trackService.getOne(id)
    }
    
    @Get()
    getAll( @Query('count') count: number ,  @Query('offset') offset: number ) {

      
        return this.trackService.getAll(count, offset )
    }
    @UseGuards(JwtAuthGuard) 
    @Get('/my-added')
    getAllAdded( @Query('count') count: number ,  @Query('offset') offset: number,  @User() user : IUser) {

      
        return this.trackService.getAllAdded(count, offset, user)
    }
    @UseGuards(JwtAuthGuard)
    @Post('/:id/add-comment')
    addComment(@Param('id') id:string, @Body() dto: AddCommentDTO,  @User() user: IUser) {

      
        return this.trackService.addComment(dto, id, user)
    }
    
    @Get('search')
    search(@Query('name') name: string) {

        return this.trackService.serch(name)
    }

}
