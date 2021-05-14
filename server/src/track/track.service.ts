import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Track } from './track.model';

@Injectable()
export class TrackService {
    constructor(@InjectModel(Track) private trackRepository: typeof Track,
    ) { }


    async creat(dto: CreatTackDTO): Promise<Track> {

        return track
    }

}
