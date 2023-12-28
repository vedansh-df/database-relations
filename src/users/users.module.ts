import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { UserRepository } from './users.repository';
import { Photos } from 'src/photos/photos.entity';
import { Accessories } from 'src/accessories/accessories.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, Photos, Accessories])
  ],
  controllers: [UsersController],
  providers: [UsersService, UserRepository]
})
export class UsersModule { }
