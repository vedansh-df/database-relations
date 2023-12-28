import { Body, Post, Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsDto } from './dto/products.dto';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService){}
    @Post()
    addProduct(@Body() data: ProductsDto): Promise<void> {
        return this.productsService.addProduct(data)
    }
}
