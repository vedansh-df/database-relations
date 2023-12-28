import { Module } from '@nestjs/common';
import { NewAccController } from './new-acc.controller';
import { NewAccService } from './new-acc.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewAccRepository } from './new-acc.repository';

@Module({
  imports: [TypeOrmModule.forFeature([NewAccRepository])],
  controllers: [NewAccController],
  providers: [NewAccService, NewAccRepository]
})
export class NewAccModule {}
