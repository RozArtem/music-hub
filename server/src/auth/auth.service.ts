import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreatUserDTO } from 'src/users/dto/creat-user.dto';
import { User } from 'src/users/user.model';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { IUser } from './user-interface';


@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
     
    ) { }


    private async generateToken(user: User): Promise<any> {

        const paylod = { email: user.email, id: user.id }

        return {
            token: this.jwtService.sign(paylod)
        }
    }

    private async validateUser(dto: CreatUserDTO): Promise<User> {

        const user = await this.userService.getOneUserByEmail(dto.email);
        const passwordEqual = await bcrypt.compare(dto.password, user.password);

        if (user && passwordEqual) {

            return user;
        }

        throw new UnauthorizedException({message: "Invalid email or password"})

    }


    async login(dto: CreatUserDTO): Promise<User> {

        const user =  await this.validateUser(dto)

        return this.generateToken(user)
    }
    
    async registration(dto: CreatUserDTO): Promise<User> {

        const candidate = await this.userService.getOneUserByEmail(dto.email);

        if (candidate) {

            throw new HttpException("Пользователь с таким email уже есть в системе", HttpStatus.BAD_REQUEST);

        }

        const heshPassword = await bcrypt.hash(dto.password, 5);
        const user = await this.userService.creatUser({ ...dto, password: heshPassword })

        return this.generateToken(user)
    }

    async authorization(userFromRequst: IUser): Promise<string> {

      
        const user = await this.userService.getUserById(userFromRequst.id)

        return this.generateToken(user)
       
    }

}
