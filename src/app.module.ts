import { Module } from '@nestjs/common';
import { HealthController } from './modules/health/controllers/health.controller';
import { DatabaseModule } from './db/database.module';
import { AppConfigModule } from './config';

@Module({
  imports: [AppConfigModule, DatabaseModule],
  controllers: [HealthController],
})
export class AppModule {}
