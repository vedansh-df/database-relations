import { IsNotEmpty } from "class-validator";

export class NewAccDto {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    acc_id: string
}