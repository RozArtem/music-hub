import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddToAlbumDTO } from 'src/album/dto/add-album.dto';
import { IUser } from 'src/auth/user-interface';
import { User } from 'src/auth/user.decorator';
import { AlbumService } from './album.service';
import { CreatAlbumDTO } from './dto/creat-album.dto';

@Controller('albums')
export class AlbumController {
    constructor(
        private albumService: AlbumService
    ) { }

    @Post()
    create(@Body() dto: CreatAlbumDTO, @User() user: IUser) {

        console.log(dto)
        return this.albumService.creat(dto, user)
    }
    @Get()
    getAll() {

        return this.albumService.getaldums()
    }
    @Get('/:id')
    getOne(@Param('id') id: string) {

        return this.albumService.getOne(id)
    }

    @Post('/add-track')
    addTrakToAlbum(@Body() dto: AddToAlbumDTO ) {

       
      return this.albumService.addTrakcToAlbum(dto);
    }


    
}
