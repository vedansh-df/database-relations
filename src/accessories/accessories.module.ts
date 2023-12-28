import { Module } from '@nestjs/common';
import { AccessoriesController } from './accessories.controller';
import { AccessoriesService } from './accessories.service';
import { AccessoriesRepository } from './accessories.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewAcc } from 'src/new-acc/new-acc.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccessoriesRepository, NewAcc])],
  controllers: [AccessoriesController],
  providers: [AccessoriesService, AccessoriesRepository]
})
export class AccessoriesModule {}
