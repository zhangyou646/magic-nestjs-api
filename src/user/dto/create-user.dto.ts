import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

  @ApiProperty({ example: '' })
  evmAccount: string;

  @ApiProperty({ example: '' })
  evmSign: string;

  @ApiProperty({ example: '' })
  btcAccount: string;


  @ApiProperty({ example: '' })
  twitterId: number;

  @ApiProperty({ example: '' })
  twitterName: string;

  @ApiProperty({ example: '' })
  twitterUsername: string;

  @ApiProperty({ example: '' })
  tgId: number;

  @ApiProperty({ example: '' })
  tgName: string;

}
