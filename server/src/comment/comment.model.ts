import { Table, Model, Column, DataType, ForeignKey } from "sequelize-typescript";
import { Track } from "src/track/track.model";
import { User } from "src/users/user.model";

interface CommentCreationAtrr {

    id: string;
    description: string;
    trackID: string;
    ownerID: string;
    

}

@Table({ tableName: 'comment' })
export class Comment extends Model<Comment, CommentCreationAtrr> {


    @Column({ type: DataType.UUID, unique: true, primaryKey: true })
    id: string;


    @Column({ type: DataType.TEXT })
    description: string;

    @ForeignKey(() => User)
    @Column({ type: DataType.UUID })
    ownerID: string;

    @ForeignKey(() => Track)
    @Column({ type: DataType.UUID })
    trackID: string;


}