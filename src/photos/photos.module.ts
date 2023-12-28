import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photos } from './photos.entity';
import { PhotoRepository } from './photos.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Photos])
  ],
  controllers: [PhotosController],
  providers: [PhotosService, PhotoRepository]
})
export class PhotosModule {}
