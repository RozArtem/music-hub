import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatUserDTO } from './dto/creat-user.dto';
import { User } from './user.model';
import { v4 as uuidv4 } from 'uuid';
import { AlbumService } from 'src/album/album.service';


@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User,
        private albumService: AlbumService
       ) { }


    async creatUser(dto: CreatUserDTO): Promise<User> {
        
        const userID = uuidv4()
        const user = await this.userRepository.create({ ...dto, id: userID });
        const favSongAlbum = await this.albumService.creatFav(userID)
      
        return user;
    }

    async getUsers(): Promise<User[]> {

        const users = await this.userRepository.findAll({include: {all: true}});

        return users
    }
    async getOneUserByEmail(email : string ): Promise<User> {

        const user = await this.userRepository.findOne({where: {email}});

        return user
    }
    async getUserById(id: string): Promise<User> {

        const user = await this.userRepository.findByPk(id)

        return user
    }

}
