import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { loadAppConfig, AppConfigService } from '@config';
import { buildDataSourceOptions } from './database.provider';

const config = loadAppConfig();
const configService = new ConfigService(config);
const appConfigService = new AppConfigService(configService);

export default new DataSource(buildDataSourceOptions(appConfigService));
