import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FileService, FileType } from 'src/file/file.service';
import { CreatTackDTO } from './dto/creat-track.dto';
import { Track } from './track.model';
import { v4 as uuidv4 } from 'uuid';
import { Comment } from 'src/comment/comment.model';
import { AddCommentDTO } from '../comment/dto/add-comment.dto';
import { CommentService } from 'src/comment/comment.service';
import { userInfo } from 'os';



@Injectable()
export class TrackService {
    constructor(
        @InjectModel(Track) private trackRepository: typeof Track,
        private fileService: FileService,
        private commentService: CommentService
    ) { }


    async creat(dto: CreatTackDTO, picture, audio, user): Promise<Track> {

        const trackID = uuidv4()
        const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
        const track = await this.trackRepository.create(
            { ...dto, 
                id: trackID, 
                audio: audioPath, 
                picture: picturePath,
                authorID: user.id }
            );

        return track;
    }

    async getAll(count = 10, offset = 0): Promise<Track[]> {
        const tracks = await this.trackRepository.findAll({
            offset: (Number(offset)),
            limit: (Number(count))
        });

        return tracks;
    }

    async getOne(id: string): Promise<Track> {

        const track = await this.trackRepository.findOne({ where: { id }, include: { model: Comment } })
        return track;
    }

    async delete(id: string): Promise<string> {

        const track = await this.trackRepository.findOne({ where: { id }, include: {model: Comment} })

        track.destroy()

        return track.id


    }

   
    async addComment(dto: AddCommentDTO, trackID): Promise<Comment> {

        const comment =  await this.commentService.create(dto, trackID)

        return comment
    }

    async serch(query: string): Promise<Track[]> {

        const nameSerch = new RegExp(query, 'i');

        const tracks = await this.trackRepository.findAll(
            {
                where: {
                  name: `${nameSerch}` 
                }
            })

            return tracks
    }


}
