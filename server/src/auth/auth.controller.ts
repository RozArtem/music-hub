import { Body, Controller, Post } from '@nestjs/common';
import { CreatUserDTO } from 'src/users/dto/creat-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ){}

    @Post('login')
    login(@Body() dto: CreatUserDTO) {

        return this.authService.login(dto)
    }
    @Post('registration')
    registration(@Body() dto: CreatUserDTO) {

        return this.authService.registration(dto)
    }
}
