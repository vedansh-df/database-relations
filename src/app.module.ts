import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessoriesModule } from './accessories/accessories.module';
import { NewAccModule } from './new-acc/new-acc.module';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UsersModule,
    PhotosModule,
    AccessoriesModule,
    NewAccModule,
    ProductsModule,
    CategoryModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      // type: 'postgres',
      // host: 'localhost',
      // port: 5432,
      // username: 'postgres',
      // password: 'root',
      // database: 'relation',
      // autoLoadEntities: true,
      // synchronize: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        autoLoadEntities: (config.get<string>('autoLoadEntities') === 'true') ? true : false,
        synchronize: (config.get<string>('synchronize') === 'true') ? true : false,
      }),
    }),


  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
