import {MigrationInterface, QueryRunner} from "typeorm";

export class initialMigration1649960679691 implements MigrationInterface {
    name = 'initialMigration1649960679691'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "author" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "FirstName" character varying(100) NOT NULL, "LastName" character varying(100) NOT NULL, "MiniBio" character varying(1000) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c81b134c9ae0af445f2a0c05031" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TABLE "book" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "Name" character varying(300) NOT NULL, "ReleaseDate" date NOT NULL, "ISBN" character varying(30) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0a5875eb5ec460206c670c3b62d" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TABLE "status" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "Name" character varying(50) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_092515b85d3582791b7516f73e0" PRIMARY KEY ("uuid"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "status"`);
        await queryRunner.query(`DROP TABLE "book"`);
        await queryRunner.query(`DROP TABLE "author"`);
    }

}
