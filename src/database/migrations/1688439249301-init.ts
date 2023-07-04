import { MigrationInterface, QueryRunner } from "typeorm";

export class init1688439249301 implements MigrationInterface {
    name = 'init1688439249301'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "grade" ("id" SERIAL NOT NULL, "grade" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_58c2176c3ae96bf57daebdbcb5e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "lastname" character varying NOT NULL, "nickname" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL, "stars" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "grade_id" integer, "institute_id" integer, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "institute" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_0805fd7b49c18ad55f0646dcbbb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subject" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "color" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_d011c391e37d9a5e63e8b04c977" UNIQUE ("name"), CONSTRAINT "UQ_ac21a65ef89c47ba983f93faa2d" UNIQUE ("color"), CONSTRAINT "PK_12eee115462e38d62e5455fc054" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "answer" ("id" SERIAL NOT NULL, "answers" character varying NOT NULL, "score" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "doc_id" integer, "user_id" integer, CONSTRAINT "PK_9232db17b63fb1e94f97e5c224f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "doc" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "type" character varying NOT NULL, "content" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "subject_id" integer, CONSTRAINT "PK_10d9859fc620db615c8aa74e324" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "instututes_categories" ("institute_id" integer NOT NULL, "subject_id" integer NOT NULL, CONSTRAINT "PK_129bebb9d570288e03a48d83076" PRIMARY KEY ("institute_id", "subject_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_fb27c2587647290f1703bf9180" ON "instututes_categories" ("institute_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_587536b097b2b4384cb133038c" ON "instututes_categories" ("subject_id") `);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_0bf1ebca1e1895b4a5f25d399a1" FOREIGN KEY ("grade_id") REFERENCES "grade"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_1214461a752556e22c740911199" FOREIGN KEY ("institute_id") REFERENCES "institute"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer" ADD CONSTRAINT "FK_7d84e207e72c2b2ab65bdca647f" FOREIGN KEY ("doc_id") REFERENCES "doc"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer" ADD CONSTRAINT "FK_add8ab72aec4ce5eb87fdc2740d" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "doc" ADD CONSTRAINT "FK_b73816c662cf31d17b9ff377703" FOREIGN KEY ("subject_id") REFERENCES "subject"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "instututes_categories" ADD CONSTRAINT "FK_fb27c2587647290f1703bf9180e" FOREIGN KEY ("institute_id") REFERENCES "institute"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "instututes_categories" ADD CONSTRAINT "FK_587536b097b2b4384cb133038ce" FOREIGN KEY ("subject_id") REFERENCES "subject"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "instututes_categories" DROP CONSTRAINT "FK_587536b097b2b4384cb133038ce"`);
        await queryRunner.query(`ALTER TABLE "instututes_categories" DROP CONSTRAINT "FK_fb27c2587647290f1703bf9180e"`);
        await queryRunner.query(`ALTER TABLE "doc" DROP CONSTRAINT "FK_b73816c662cf31d17b9ff377703"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP CONSTRAINT "FK_add8ab72aec4ce5eb87fdc2740d"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP CONSTRAINT "FK_7d84e207e72c2b2ab65bdca647f"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_1214461a752556e22c740911199"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_0bf1ebca1e1895b4a5f25d399a1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_587536b097b2b4384cb133038c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fb27c2587647290f1703bf9180"`);
        await queryRunner.query(`DROP TABLE "instututes_categories"`);
        await queryRunner.query(`DROP TABLE "doc"`);
        await queryRunner.query(`DROP TABLE "answer"`);
        await queryRunner.query(`DROP TABLE "subject"`);
        await queryRunner.query(`DROP TABLE "institute"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "grade"`);
    }

}
