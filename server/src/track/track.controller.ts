import { Body, Controller, Delete, Get, Param, Post, Query, Req, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { AddCommentDTO } from 'src/comment/dto/add-comment.dto';
import { CreatTackDTO } from './dto/creat-track.dto';
import { TrackService } from './track.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/auth/user.decorator';
import { IUser } from 'src/auth/user-interface';



@Controller('api/v1/track')

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
    create(@UploadedFiles() files, @Body() dto: CreatTackDTO, @User() user: IUser) {

        const { picture, audio } = files
        return this.trackService.creat(dto, picture[0], audio[0], user);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    delete(@Param('id') id: string, @User() user: IUser) {
        return this.trackService.delete(id, user)
    }

    @Get('/:id')
    getOne(@Param('id') id: string) {

        return this.trackService.getOne(id)
    }

    @Get()
    getAll(@Query('count') count: number, @Query('offset') offset: number) {


        return this.trackService.getAll(count, offset)
    }

    @Get('/my-added')
    getAllAdded(@Query('count') count: number, @Query('offset') offset: number, @User() user: IUser) {


        return this.trackService.getAllAdded(count, offset, user)
    }
    @Get('/:userID/user-added')
    getAllAddedUser(
        @Query('count') count: number,
        @Query('offset') offset: number,
        @Param('userID') userID: string) {


        return this.trackService.getAllAddedUser(count, offset, userID)
    }
    @UseGuards(JwtAuthGuard)
    @Post('/:id/add-comment')
    addComment(@Param('id') id: string, @Body() dto: AddCommentDTO, @User() user: IUser) {


        return this.trackService.addComment(dto, id, user)
    }

    @Get('search/:userID/own-tracks/:name')
    searchUserOwnTraks(@Param('userID') userID: string, @Param('name') name: string) {

        return this.trackService.searchUserOwnTraks(name, userID)
    }

    @Get('search/:albumID/tracks/:name')
    searchInAlbum(@Param('albumID') albumID: string, @Param('name') name: string) {

        return this.trackService.searchInAlbum(name, albumID)
    }

    @Get('search/:name')
    search(@Param('name') name: string) {

        return this.trackService.serch(name)
    }

}
