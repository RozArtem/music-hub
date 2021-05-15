import { Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { Track } from './track.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { FileModule } from 'src/file/file.module';

@Module({
  imports: [
    FileModule,
    SequelizeModule.forFeature([Track])
  ],
  providers: [TrackService],
  controllers: [TrackController]
})
export class TrackModule {}
