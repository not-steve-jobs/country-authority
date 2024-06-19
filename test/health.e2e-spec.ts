import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { AppConfigService } from '@config';

describe('HealthController (e2e)', () => {
  let app: INestApplication;
  let appConfigService: AppConfigService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    appConfigService = await app.resolve(AppConfigService);

    await app.init();
  });

  it('GET /status', async () => {
    const { statusCode, body } = await request(app.getHttpServer()).get(
      '/status',
    );

    expect(statusCode).toBe(200);
    expect(body).toMatchObject({
      version: appConfigService.version,
      serviceName: appConfigService.app.serviceName,
      env: appConfigService.app.env,
      plant: appConfigService.app.plant,
    });
  });
});
