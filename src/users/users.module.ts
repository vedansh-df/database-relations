import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { UserRepository } from './users.repository';
import { Photos } from '../photos/photos.entity';
import { Accessories } from '../accessories/accessories.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, Photos, Accessories])
  ],
  controllers: [UsersController],
  providers: [UsersService, UserRepository]
})
export class UsersModule { }
