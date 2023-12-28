import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { CategoryDto } from './dto/products.dto';

@Injectable()
export class CategoryService {
    constructor(private categoryRepository: CategoryRepository) { }

    async addCategory(data: CategoryDto): Promise<void> {
        try {
            const { category_name } = data
            const addCategory = this.categoryRepository.create({
                category_name,
            })
            await this.categoryRepository.save(addCategory)
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }
}
