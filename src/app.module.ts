import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessoriesModule } from './accessories/accessories.module';
import { NewAccModule } from './new-acc/new-acc.module';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    PhotosModule,
    AccessoriesModule,
    NewAccModule,
    ProductsModule,
    CategoryModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'relation',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
