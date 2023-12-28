import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
    constructor(private productsRepository: ProductsRepository) { }

    async addProduct(data: any): Promise<void> {
        try {
            // Adding many to many relationship
            const { product_name, category } = data
            const addProduct = this.productsRepository.create({
                product_name,
                category
            })
            await this.productsRepository.save(addProduct)
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }
}
