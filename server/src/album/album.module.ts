import { forwardRef, Module } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumController } from './album.controller';
import { Album } from './album.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { TrackModule } from 'src/track/track.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    TrackModule,
    SequelizeModule.forFeature([Album])
  ],
  providers: [AlbumService],
  controllers: [AlbumController],
  exports: [AlbumService]

})
export class AlbumModule { }
