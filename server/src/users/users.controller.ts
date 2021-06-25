import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreatUserDTO } from './dto/creat-user.dto';
import { UsersService } from './users.service';

@Controller('/api/v1/users')
export class UsersController {

    constructor(private userService: UsersService) { }


    @Post()
    creat(@Body() userdto: CreatUserDTO) {

        return this.userService.creatUser(userdto)
    }
    @Get('/:id')
    getUserProfile(@Param('id') id: string) {

        return this.userService.getUserProfile(id)
    }
    @Get('/user/:id')
    getUser(@Param('id') id: string) {

        return this.userService.getUserById(id)
    }

    @Get()
    getUsers(
        @Query('count') count: number,
        @Query('offset') offset: number) {

        return this.userService.getUsers(count, offset)
    }
}
