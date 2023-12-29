import { Body, Controller, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/products.dto';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService){}

    @Post()
    addCategory(@Body() data: CategoryDto): Promise<void> {
        return this.categoryService.addCategory(data)
    }
}
