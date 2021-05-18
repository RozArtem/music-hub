import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
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
    getAll() {

        return this.albumService.getaldums()
    }
    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    getOne(@Param('id') id: string) {

        return this.albumService.getOne(id)
    }

 
    
    @UseGuards(JwtAuthGuard)
    @Post('/add-track')
    addTrakToAlbum(@Body() dto: AddToAlbumDTO , @User() user: IUser ) {

       
      return this.albumService.addTrakcToAlbum(dto, user);
    }

    
    @UseGuards(JwtAuthGuard)
    @Post('/add-to-fav')
    addFavorite(@Body() dto : AddToFavDTO , @User() user: IUser ) {

      
     return this.albumService.addTrakcToFav(dto, user)
    }
   


    
}
