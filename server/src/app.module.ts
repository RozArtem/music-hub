import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/user.model';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TrackModule } from './track/track.module';
import { CommentModule } from './comment/comment.module';
import { AlbumModule } from './album/album.module';
import { Track } from './track/track.model';
import { Comment } from './comment/comment.model';
import { Album } from './album/album.model';
import { AlbumTrack } from './album/album-track.model';
import { FileModule } from './file/file.module';
import * as path from 'path'
import {ServeStaticModule} from "@nestjs/serve-static";








@Module({
  imports: [
    ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
   }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.PGHOST,
      port: parseInt(process.env.PGPORT),
      username: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      models: [User, Track, Comment, Album, AlbumTrack],
      autoLoadModels: true
    }),
    UsersModule,
    AuthModule,
    TrackModule,
    CommentModule,
    AlbumModule,
    FileModule

  ]

})
export class AppModule {}
