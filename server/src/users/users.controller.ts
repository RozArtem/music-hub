import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatUserDTO } from './dto/creat-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor( private userService: UsersService) {}

  
    @Post()
    creat(@Body() userdto: CreatUserDTO) {

        return this.userService.creatUser(userdto)
    }
    @Get()
    getUsers() {

        return this.userService.getUsers();
    }
}
