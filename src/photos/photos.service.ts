import { Injectable } from '@nestjs/common';
import { PhotoRepository } from './photos.repository';
import { Photos } from './photos.entity';
import { PhotosDto } from './dto/photos.dto';

@Injectable()
export class PhotosService {
    constructor(private photoRepository: PhotoRepository) { }

    async addPhoto(data: PhotosDto): Promise<void> {
        try {
            const { id, photoId } = data
            const photo = this.photoRepository.create({
                photoId,
                userId: {
                    id
                }
            })
            await this.photoRepository.save(photo)
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    async getPhoto(id: string): Promise<Photos[]> {
        try {
            const users = await this.photoRepository.find({
                relations: {
                    userId: true,
                },
                where: {
                    id
                }
            })
            return users
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }
}
