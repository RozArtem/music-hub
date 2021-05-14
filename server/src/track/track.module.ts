import { Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { Track } from './track.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forFeature([Track])
  ],
  providers: [TrackService],
  controllers: [TrackController]
})
export class TrackModule {}
