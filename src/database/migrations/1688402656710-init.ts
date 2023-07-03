import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1688402656710 implements MigrationInterface {
  name = 'init1688402656710';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "doc" DROP COLUMN "answers"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "doc" ADD "answers" character varying NOT NULL`,
    );
  }
}
