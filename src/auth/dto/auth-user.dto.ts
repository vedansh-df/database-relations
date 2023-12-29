import { IsNotEmpty } from "class-validator"

export class AuthUserSignInDto {
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    password: string
}