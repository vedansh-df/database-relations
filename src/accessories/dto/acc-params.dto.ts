import { IsNotEmpty } from "class-validator";

export class AccessoriesParamsDto {
    @IsNotEmpty()
    id: string
}