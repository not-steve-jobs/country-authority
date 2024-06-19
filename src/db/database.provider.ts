import * as path from 'path';
import { DataSourceOptions } from 'typeorm';
import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigService } from '@config';
import { CustomNamingStrategy } from './utils/custom-naming-strategy.util';

export const DatabaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
  inject: [AppConfigService],
  useFactory: buildDataSourceOptions,
});

export function buildDataSourceOptions({
  db,
}: AppConfigService): DataSourceOptions {
  return {
    ...db,
    type: 'postgres',
    synchronize: false,
    entities: [path.join(__dirname, '../**/*.entity.{js,ts}')],
    migrations: [path.join(__dirname, './migrations/*.{js,ts}')],
    migrationsRun: true,
    logging: ['error', 'warn', 'schema'],
    installExtensions: false,
    namingStrategy: new CustomNamingStrategy(),
  };
}
