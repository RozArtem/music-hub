
import { Column, DataType, Model, Table } from "sequelize-typescript";


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
    email: string;

    @Column({type: DataType.STRING, allowNull: false})
    password: string;

  
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

 
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

}