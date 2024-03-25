import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { ApiResponse } from '../api/api-response.interface'
import { ApiResponseService } from '../api/api-response.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly response: ApiResponseService,
  ) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<ApiResponse> {
    return this.response.success('success', await this.usersService.create(createUserDto));
  }

  @Get()
  async findAll(): Promise<ApiResponse> {
    return this.response.success('query success', await this.usersService.findAll());
    // return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<ApiResponse> {
    return this.response.success('query success', await this.usersService.findOne(id))
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ApiResponse> {
    await this.usersService.remove(id);
    return this.response.success('delete success')
  }
}
