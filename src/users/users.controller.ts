import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';
import { UsersDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Get()
    getUser(): Promise<Users[]>  {
        return this.userService.getUser()
    }

    @Get("inner-join")
    innerJoin(): Promise<Users[]>  {
        return this.userService.innerJoin()
    }

    @Get("left-join")
    leftJoin(): Promise<Users[]> {
        return this.userService.leftJoin()
    }

    @Post()
    createUser(@Body() data: UsersDto): Promise<void> {
        return this.userService.createUser(data)
    }
}
