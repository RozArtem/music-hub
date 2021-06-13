import { Body, Controller, Delete, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { AddToAlbumDTO } from 'src/album/dto/add-album.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { IUser } from 'src/auth/user-interface';
import { User } from 'src/auth/user.decorator';
import { AlbumService } from './album.service';
import { AddToFavDTO } from './dto/add-to_fav.dto';
import { CreatAlbumDTO } from './dto/creat-album.dto';

@Controller('albums')
export class AlbumController {
    constructor(
        private albumService: AlbumService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() dto: CreatAlbumDTO, @User() user: IUser) {

        console.log(dto)
        return this.albumService.creat(dto, user)
    }
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll(@User() user: IUser) {

        return this.albumService.getAldums(user.id)
    }
    @UseGuards(JwtAuthGuard)
    @Get('/fav')
    getFav(@User() user: IUser,  @Query('count') count: number ,  @Query('offset') offset: number) {

        return this.albumService.getFav(user.id, count, offset)
    }
    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    getOne(@Param('id') id: string,  @Query('count') count: number ,  @Query('offset') offset: number) {

        return this.albumService.getOne(id, count, offset)
    }



    @UseGuards(JwtAuthGuard)
    @Post('/add-track')
    addTrakToAlbum(@Body() dto: AddToAlbumDTO, @User() user: IUser) {

        return this.albumService.addTrakcToAlbum(dto, user);
    }


    @UseGuards(JwtAuthGuard)
    @Post('/add-to-fav')
    addFavorite(@Body() dto: AddToFavDTO, @User() user: IUser) {


        return this.albumService.addTrakcToFav(dto, user)
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/delete-from-album')
    deleteFromAlbum(
        @Query('albumID') albumID: string,
        @Query('trackID') trackID: string,
        @User() user: IUser) {


        return this.albumService.deleteFromAlbum(albumID, trackID, user)
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/delete-from-fav')
    deleteFromFavorite(@Query('trackID') trackID: string, @User() user: IUser) {


        return this.albumService.deleteFromFavorite(trackID, user)
    }
    @UseGuards(JwtAuthGuard)
    @Delete('/:albumID')
    deleteAlbum(@Param('albumID') albumID: string, @User() user: IUser) {


        return this.albumService.delete(albumID, user)
    }




}
