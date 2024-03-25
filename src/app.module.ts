import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/users.module';
import { ApiResponseService } from './api/api-response.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '.data/database.sqlite',
      autoLoadEntities: true,
      synchronize: true, // auto create tables
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, ApiResponseService],
})
export class AppModule { }
