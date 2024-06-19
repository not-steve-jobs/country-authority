import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class AppSchema {
  @IsInt()
  port: number;

  @IsString()
  @IsNotEmpty()
  env: string;

  @IsString()
  @IsNotEmpty()
  plant: string;

  @IsString()
  @IsNotEmpty()
  serviceName: string;
}
