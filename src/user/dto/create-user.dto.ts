import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Marvin' })
  firstName: string;
  @ApiProperty({ example: 'Xu' })
  lastName: string;

}
