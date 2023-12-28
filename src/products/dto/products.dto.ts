import { IsNotEmpty } from "class-validator";

export class ProductsDto {
    @IsNotEmpty()
    product_name: string
}