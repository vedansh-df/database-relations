import { IsNotEmpty } from "class-validator";

export class AccessoriesDto {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    userId: string
}