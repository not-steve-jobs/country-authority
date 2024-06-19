import {
  IsDefined,
  IsNotEmptyObject,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { AppSchema, DbSchema } from './nested';
import { SwaggerSchema } from './nested/swagger.schema';

export class RootSchema {
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => AppSchema)
  app: AppSchema;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => DbSchema)
  db: DbSchema;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => SwaggerSchema)
  swagger: SwaggerSchema;

  version: string;
}
