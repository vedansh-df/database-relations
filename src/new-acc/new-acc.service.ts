import { Injectable } from '@nestjs/common';
import { NewAccRepository } from './new-acc.repository';
import { NewAccDto } from './dto/new-acc.dto';

@Injectable()
export class NewAccService {
    constructor(private newAccRepository: NewAccRepository) { }

    async addNewAccessories(data: NewAccDto): Promise<void> {
        try {
            const { name, acc_id } = data
            const createAssories = this.newAccRepository.create({
                name,
                newAcc: {
                    id: acc_id
                }
            })
            await this.newAccRepository.save(createAssories)
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }
}
