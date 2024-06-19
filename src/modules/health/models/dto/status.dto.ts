import { ApiProperty } from '@nestjs/swagger';

export class StatusDto {
  @ApiProperty({ example: 'country-authority' })
  serviceName: string;

  @ApiProperty({ example: '1.0.0' })
  version: string;

  @ApiProperty({ example: 'dev' })
  env: string;

  @ApiProperty({ example: 'int' })
  plant: string;
}
