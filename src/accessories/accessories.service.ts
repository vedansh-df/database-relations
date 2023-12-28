import { Injectable } from '@nestjs/common';
import { AccessoriesRepository } from './accessories.repository';
import { AccessoriesDto } from './dto/accessories.dto';
import { AccessoriesParamsDto } from './dto/acc-params.dto';
import { Accessories } from './accessories.entity';

@Injectable()
export class AccessoriesService {
    constructor(private accessoriesRepository: AccessoriesRepository) { }

    async addAccessories(data: AccessoriesDto): Promise<void> {
        try {
            const { name, userId } = data
            const createAssories = this.accessoriesRepository.create({
                name,
                userId: {
                    id: userId
                }
            })
            await this.accessoriesRepository.save(createAssories)
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    async getAccessories(userId: AccessoriesParamsDto): Promise<Accessories[]> {
        try {
            // Type 'AccessoriesParamsDto' is not assignable to type 'string | FindOperator<string>'.
            // Type was not matching for the above issue.
            const { id } = userId
            const accessories = this.accessoriesRepository.find({
                where: {
                    id
                }
            })
            return accessories
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }
}
