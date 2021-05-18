import { Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import { CreatUserDTO } from 'src/users/dto/creat-user.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { IUser } from './user-interface';
import { User } from './user.decorator';


@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ){}


    @UseGuards(JwtAuthGuard)
    @Get('/auth')
    auth(@User() user : IUser) {

        return this.authService.authorization(user)
    }

    @Post('login')
    login(@Body() dto: CreatUserDTO) {

        return this.authService.login(dto)
    }

    @Post('registration')
    registration(@Body() dto: CreatUserDTO) {

        return this.authService.registration(dto)
    }


    
}
