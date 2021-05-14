
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Track } from "src/track/track.model";
import { Album } from "./album.model";



@Table({tableName: 'album_track'})
export class AlbumTrack extends Model<AlbumTrack> {

   
    

    @ForeignKey(() => Album)
    @Column({type: DataType.STRING})
    albumId: string;

    @ForeignKey(() => Track)
    @Column({type: DataType.STRING})
    trackId: string;
  
}