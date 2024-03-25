import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import { ApiResponseService } from '../api/api-response.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, ApiResponseService],
  controllers: [UsersController],
})
export class UsersModule { }
