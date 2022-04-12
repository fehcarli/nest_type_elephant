import {MigrationInterface, QueryRunner} from "typeorm";

export class initialMigration1649776542610 implements MigrationInterface {
    name = 'initialMigration1649776542610'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "author" ("Id" uuid NOT NULL DEFAULT uuid_generate_v4(), "FirstName" character varying(100) NOT NULL, "LastName" character varying(100) NOT NULL, "MiniBio" character varying(1000) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4880e15dfecd31265d230d460a2" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "status" ("Id" uuid NOT NULL DEFAULT uuid_generate_v4(), "Name" character varying(50) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b3104aac21a05e03998782a75cc" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "book" ("Id" uuid NOT NULL DEFAULT uuid_generate_v4(), "Name" character varying(300) NOT NULL, "ReleaseDate" date NOT NULL, "ISBN" character varying(30) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2f5c3a233c33616f031206e11bd" PRIMARY KEY ("Id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "book"`);
        await queryRunner.query(`DROP TABLE "status"`);
        await queryRunner.query(`DROP TABLE "author"`);
    }

}
