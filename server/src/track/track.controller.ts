import { Body, Controller, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreatTackDTO } from './dto/creat-track.dto';
import { TrackService } from './track.service';

@Controller('track')
export class TrackController {

    constructor(
        private trackService: TrackService
    ) { }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
        { name: 'audio', maxCount: 1 },
    ]))
    create(@UploadedFiles() files, @Body() dto: CreatTackDTO) {
        const { picture, audio } = files
        return this.trackService.creat(dto, picture[0], audio[0]);
    }
}
