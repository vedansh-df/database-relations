import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { AuthUserSignInDto } from './dto/auth-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private authRepo: AuthRepository,
        private jwtService: JwtService
    ) { }

    async signIn(data: AuthUserSignInDto) {
        try {
            const { email, password } = data
            const userDetails = await this.authRepo.findOne({
                where: {
                    email
                }
            })
            const isMatch = await bcrypt.compare(password, userDetails.password)
            if (isMatch) {
                const payload = {
                    name: userDetails.name,
                    email: userDetails.email,
                    id: userDetails.id
                };
                return {
                    access_token: await this.jwtService.signAsync(payload),
                };
            } else {
                throw new UnauthorizedException("Invalid Credentials")
            }

        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }
}
