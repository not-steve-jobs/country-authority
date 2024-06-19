import { IsBoolean, IsNotEmpty } from 'class-validator';

export class SwaggerSchema {
  @IsBoolean()
  @IsNotEmpty()
  enabled: boolean;
}
