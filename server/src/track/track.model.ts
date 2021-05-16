
import { BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Album } from "src/album/album.model";
import { User } from "src/users/user.model";
import { AlbumTrack } from "src/album/album-track.model";
import { Comment } from "src/comment/comment.model";


interface TrackCreationAtrr {

    id: string;
    name: string;
    audio: string;
    picture: string;
    authorID: string;

}

@Table({ tableName: 'track' })
export class Track extends Model<Track, TrackCreationAtrr> {


    @Column({ type: DataType.UUID, unique: true, primaryKey: true })
    id: string;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    name: string;

    @Column({type: DataType.STRING, unique:true, allowNull: false})
    audio: string;

    @Column({type: DataType.STRING, unique:true})
    picture: string;

    @ForeignKey(() => User)
    @Column({ type: DataType.UUID })
    authorID: string

    @BelongsToMany(() => Album, () => AlbumTrack)
    albums: Album[]

    @HasMany(() => Comment)
    comments: Comment[]

}
