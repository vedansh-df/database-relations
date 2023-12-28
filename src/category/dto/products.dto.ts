import { IsNotEmpty } from "class-validator";

export class CategoryDto {
    @IsNotEmpty()
    category_name: string
}