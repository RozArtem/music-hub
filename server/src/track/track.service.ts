import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatTackDTO } from './dto/creat-track.dto';
import { Track } from './track.model';

@Injectable()
export class TrackService {
    constructor(@InjectModel(Track) private trackRepository: typeof Track,
    ) { }


    async creat(dto: CreatTackDTO, picture, audio): Promise<Track> {

            

        

    }

}
