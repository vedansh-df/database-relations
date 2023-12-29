import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';
import { UsersDto } from './dto/users.dto';
import { Public } from '../auth/auth.decorator';

@Controller('user')
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

    @Public()
    @Post('signUp')
    signUp(@Body() data: UsersDto): Promise<void> {
        return this.userService.signUp(data)
    }
}
