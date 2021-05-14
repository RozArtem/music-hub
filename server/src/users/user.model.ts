
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Album } from "src/album/album.model";
import { Track } from "src/track/track.model";


interface UserCreationAtrr {
    
    id: string;
    email: string;
    password: string;

}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAtrr> {

   
    @Column({type: DataType.UUID, unique: true,  primaryKey: true })
    id: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;


    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @HasMany(() => Track)
    tracks: Track[];

    @HasMany(() => Album)
    albums: Album[];

}