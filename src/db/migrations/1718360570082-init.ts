import { MigrationInterface, QueryRunner } from 'typeorm';

export class New1718360570082 implements MigrationInterface {
  name = 'Init1718360570082';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

    await queryRunner.query(`
      CREATE TABLE "country" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "iso2" character varying(2) NOT NULL UNIQUE,
        "iso3" character varying(3) NOT NULL,
        "name" character varying(60) NOT NULL,
        "group" character varying(30),
        CONSTRAINT "PK-COUNTRY-ID" PRIMARY KEY ("id")
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "country_authority" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "countryId" uuid NOT NULL,
        "authorityId" uuid NOT NULL,
        CONSTRAINT "PK-COUNTRY_AUTHORITY-ID" PRIMARY KEY ("id"),
        CONSTRAINT "UQ_COUNTRY_AUTHORITY-COUNTRYID-AUTHORITYID" UNIQUE ("countryId", "authorityId")
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "country_group" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "name" character varying(100) NOT NULL UNIQUE,
        "description" character varying,
        CONSTRAINT "PK-COUNTRY_GROUP-ID" PRIMARY KEY ("id")
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "country_to_country_group" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "countryGroupId" uuid NOT NULL,
        "countryId" uuid NOT NULL,
        CONSTRAINT "PK-COUNTRY_TO_COUNTRY_GROUP-ID" PRIMARY KEY ("id"),
        CONSTRAINT "UQ_COUNTRY_TO_COUNTRY_GROUP-COUNTRYID-COUNTRYGROUPID" UNIQUE ("countryGroupId", "countryId")
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "authority" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "fullCode" character varying NOT NULL UNIQUE,
        "name" character varying(100) NOT NULL,
        CONSTRAINT "PK-AUTHORITY-ID" PRIMARY KEY ("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "authority"`);
    await queryRunner.query(`DROP TABLE "country_to_country_group"`);
    await queryRunner.query(`DROP TABLE "country_group"`);
    await queryRunner.query(`DROP TABLE "country_authority"`);
    await queryRunner.query(`DROP TABLE "country"`);
  }
}
