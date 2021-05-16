import { forwardRef, Module } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumController } from './album.controller';
import { Album } from './album.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { TrackModule } from 'src/track/track.module';

@Module({
  imports: [
    TrackModule,
    SequelizeModule.forFeature([Album])
  ],
  providers: [AlbumService],
  controllers: [AlbumController],
  exports: [AlbumService]

})
export class AlbumModule { }
