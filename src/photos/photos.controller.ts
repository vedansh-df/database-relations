import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosDto } from './dto/photos.dto';
import { Photos } from './photos.entity';

@Controller("photos")
export class PhotosController {
    constructor(private photoService: PhotosService) { }

    @Get("/:id")
    getPhoto(@Param("id") id: string): Promise<Photos[]> {
        return this.photoService.getPhoto(id)
    }

    @Post()
    addPhoto(@Body() data: PhotosDto): Promise<void> {
        return this.photoService.addPhoto(data)
    }
}
