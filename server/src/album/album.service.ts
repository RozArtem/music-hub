import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Album } from './album.model';
import { CreatAlbumDTO } from './dto/creat-album.dto';
import { v4 as uuidv4 } from 'uuid';
import { AddToAlbumDTO } from 'src/album/dto/add-album.dto';
import { TrackService } from 'src/track/track.service';
import { Track } from 'src/track/track.model';
import { IUser } from 'src/auth/user-interface';

@Injectable()
export class AlbumService {
    constructor(
        @InjectModel(Album) private albumRepositiry: typeof Album,
        private trackService: TrackService
    ) { }

    async creat(dto: CreatAlbumDTO, user: IUser): Promise<Album> {


        const albumID = uuidv4()
        const album = await this.albumRepositiry.create({ ...dto, id: albumID , ownerID: user.id})

        return album
    }
    async creatFav(userID: string): Promise<Album> {

        const albumID = uuidv4();
        const favAlbum = await this.albumRepositiry.create({ name: 'favoirite', id: albumID, ownerID: userID })

        return favAlbum
    }
    async delete(id: string): Promise<string> {


        const album = await this.albumRepositiry.findOne({ where: { id } })
        album.destroy()

        return album.id
    }

    async getaldums(): Promise<Album[]> {

        const aldums = await this.albumRepositiry.findAll();

        return aldums
    }
    async getOne(id: string): Promise<Album> {

        const aldum = await this.albumRepositiry.findOne({ where: { id }, include: { model: Track } });

        return aldum
    }

    async addTrakcToAlbum(dto: AddToAlbumDTO): Promise<AddToAlbumDTO> {

        const album = await this.albumRepositiry.findByPk(dto.albumID);
        const track = await this.trackService.getOne(dto.trackId);

        if (album && track) {
            await album.$add('traks', track.id);

            return dto
        }

        throw new HttpException('Аудио файл или альбом не найден', HttpStatus.NOT_FOUND);


    }


}
