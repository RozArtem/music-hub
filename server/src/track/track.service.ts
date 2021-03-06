import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FileService, FileType } from 'src/file/file.service';
import { CreatTackDTO } from './dto/creat-track.dto';
import { Track } from './track.model';
import { v4 as uuidv4 } from 'uuid';
import { Comment } from 'src/comment/comment.model';
import { AddCommentDTO } from '../comment/dto/add-comment.dto';
import { CommentService } from 'src/comment/comment.service';
import { IUser } from 'src/auth/user-interface';
import { Album } from 'src/album/album.model';
import { Op } from "sequelize";
import { AlbumService } from 'src/album/album.service';
import { ReturnTackDTO } from './dto/return-track.dto';




@Injectable()
export class TrackService {
    constructor(
        @InjectModel(Track) private trackRepository: typeof Track,
        private fileService: FileService,
        private commentService: CommentService


    ) { }


    async creat(dto: CreatTackDTO, picture, audio, user): Promise<Track> {

        const trackID = uuidv4()
        const audioPath = this.fileService.createFile(FileType.AUDIO, audio, trackID);
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture, trackID);
        const track = await this.trackRepository.create(
            {
                ...dto,
                id: trackID,
                audio: audioPath,
                picture: picturePath,
                authorID: user.id
            }
        );

        return track;
    }

    async getAll(count = 10, offset = 0): Promise<ReturnTackDTO> {
        const tracks = await this.trackRepository.findAll({

            include: { model: Album },
            offset: (Number(offset)),
            limit: (Number(count)),
            order: [
                ['name', 'ASC'],
            ]
        });
        const countOfAll = await this.trackRepository.count()

        return { tracks, countOfAll };
    }
    async getAllAdded(count = 10, offset = 0, user: IUser): Promise<Track[]> {
        const tracks = await this.trackRepository.findAll({
            where: { authorID: user.id },
            offset: (Number(offset)),
            limit: (Number(count))
        });


        return tracks;
    }
    async getAllAddedUser(count = 10, offset = 0, userID: string): Promise<Track[]> {
        const tracks = await this.trackRepository.findAll({
            where: { authorID: userID },
            offset: (Number(offset)),
            limit: (Number(count))
        });
        

        return tracks;
    }

    async getAllAddedToALbum(count = 10, offset = 0, albumID: string): Promise<Track[]> {
        const tracks = await this.trackRepository.findAll({

            include: {
                model: Album,
                where: {
                    id: albumID
                }
            },
            offset: (Number(offset)),
            limit: (Number(count))
        });


        return tracks;
    }
    async getOne(id: string): Promise<Track> {

        const track = await this.trackRepository.findOne({ where: { id }, include: { model: Comment } })
        return track;
    }

    async delete(id: string, user: IUser): Promise<string> {

        const track = await this.trackRepository.findOne({ where: { id, authorID: user.id }, include: { model: Comment } })
        track.destroy()
        this.fileService.removeFile(id)

        return track.id

    }



    async addComment(dto: AddCommentDTO, trackID, user: IUser): Promise<Comment> {

        const comment = await this.commentService.create(dto, trackID, user)

        return comment
    }

    async serch(query: string): Promise<Track[]> {



        const tracks = await this.trackRepository.findAll(
            {
                where: {
                    name:
                    {
                        [Op.regexp]: query
                    }
                }
            })

        return tracks
    }

    async searchUserOwnTraks(query: string, userID: string): Promise<Track[]> {



        const tracks = await this.trackRepository.findAll(
            {
                where: {

                    name:
                    {
                        [Op.regexp]: query
                    },
                    authorID: userID
                }
            })

        return tracks
    }

    async searchInAlbum(query: string, albumID: string): Promise<any> {



        const tracks = await this.trackRepository.findAll(
            {
                where: {

                    name:
                    {
                        [Op.regexp]: query
                    }

                },
                include: {
                    model: Album,
                    where: {
                        id: albumID
                    }
                }
            })

        return { tracks, albumID }
    }


}
