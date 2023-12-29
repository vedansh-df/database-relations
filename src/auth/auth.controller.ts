import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserSignInDto } from './dto/auth-user.dto';
import { Public } from './auth.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Public()
    @Post('signIn')
    signIn(@Body() data: AuthUserSignInDto) {
        return this.authService.signIn(data)
    }
}
