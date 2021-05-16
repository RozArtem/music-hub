
import { BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Track } from "src/track/track.model";
import { User } from "src/users/user.model";
import { AlbumTrack } from "./album-track.model";


interface AlbumCreationAtrr {
    
    id: string;
    name: string;
    ownerID: string;

}

@Table({tableName: 'album'})
export class Album extends Model<Album, AlbumCreationAtrr> {

   
    @Column({type: DataType.UUID, unique: true,  primaryKey: true })
    id: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @ForeignKey(() => User)
    @Column({type: DataType.UUID})
    ownerID: string

    @BelongsToMany(() => Track, () => AlbumTrack)
    traks : Track[]

  
}