import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Album } from './album.model';
import { CreatAlbumDTO } from './dto/creat-album.dto';
import { v4 as uuidv4 } from 'uuid';
import { AddToAlbumDTO } from 'src/album/dto/add-album.dto';
import { TrackService } from 'src/track/track.service';
import { Track } from 'src/track/track.model';
import { IUser } from 'src/auth/user-interface';
import { AddToFavDTO } from './dto/add-to_fav.dto';

@Injectable()
export class AlbumService {
    constructor(
        @InjectModel(Album) private albumRepositiry: typeof Album,
        private trackService: TrackService
    ) { }

    async creat(dto: CreatAlbumDTO, user: IUser): Promise<Album> {


        const albumID = uuidv4()
        const album = await this.albumRepositiry.create({ ...dto, id: albumID, ownerID: user.id })

        return album
    }
    async creatFav(userID: string): Promise<Album> {

        const albumID = uuidv4();
        const favAlbum = await this.albumRepositiry.create({ name: 'favoirite', id: albumID, ownerID: userID })

        return favAlbum
    }
    async delete(id: string, user: IUser): Promise<string> {


        const album = await this.albumRepositiry.findOne({ where: { id, ownerID: user.id } })
        album.destroy()

        return album.id
    }

    async getAldums(userID: string): Promise<Album[]> {

        const aldums = await this.albumRepositiry.findAll({ where: { ownerID: userID }, include: { model: Track } });

        return aldums
    }
    async getFav(userID: string, count = 10, offset = 0): Promise<Track[]> {

        const aldum = await this.albumRepositiry.findOne({
            where: { ownerID: userID, name: 'favoirite' }
          
        });
        const traks = await this.trackService.getAllAddedToALbum(count, offset, aldum.id)

        return traks
    }
    async getOne(id: string, count = 10, offset = 0): Promise<Album> {

        const aldum = await this.albumRepositiry.findOne({
            where: { id },
            include: {
                model: Track,
                where: {
                   
                }
            }
        });

        return aldum
    }

    async addTrakcToAlbum(dto: AddToAlbumDTO, user: IUser): Promise<any> {

        const album = await this.albumRepositiry.findOne({ where: { id: dto.albumID, ownerID: user.id } });;
        const track = await this.trackService.getOne(dto.trackId);


        if (album && track) {
            await album.$add('traks', track);

            return { album, track }

        }

        throw new HttpException('Аудио файл или альбом не найден', HttpStatus.NOT_FOUND);


    }

    async deleteFromFavorite(trackID: string, user: IUser): Promise<string> {

        const album = await this.albumRepositiry.findOne({ where: { name: 'favoirite', ownerID: user.id } });
        const track = await this.trackService.getOne(trackID);

        await album.$remove('traks', track);

        return track.id
    }

    async deleteFromAlbum(albumID: string, trackID: string, user: IUser): Promise<any> {

        const album = await this.albumRepositiry.findOne({ where: { id: albumID, ownerID: user.id } });
        const track = await this.trackService.getOne(trackID);

        await album.$remove('traks', track);

        return { album, track }


    }

    async addTrakcToFav(dto: AddToFavDTO, user: IUser): Promise<Track> {

        const album = await this.albumRepositiry.findOne({ where: { name: 'favoirite', ownerID: user.id } });
        const track = await this.trackService.getOne(dto.trackId);


        if (album && track) {
            await album.$add('traks', track);

            return track
        }

        throw new HttpException('что-то пошло не так', HttpStatus.NOT_FOUND);


    }




}
