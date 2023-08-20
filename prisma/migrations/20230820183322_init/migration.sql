/*
  Warnings:

  - The values [RESTRICTED] on the enum `Privacity` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `stars` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[externalId]` on the table `Doc` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `externalId` to the `Doc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subjectId` to the `Doc` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Privacity_new" AS ENUM ('PUBLIC', 'PRIVATE');
ALTER TABLE "Doc" ALTER COLUMN "privacity" TYPE "Privacity_new" USING ("privacity"::text::"Privacity_new");
ALTER TYPE "Privacity" RENAME TO "Privacity_old";
ALTER TYPE "Privacity_new" RENAME TO "Privacity";
DROP TYPE "Privacity_old";
COMMIT;

-- AlterTable
ALTER TABLE "Doc" ADD COLUMN     "externalId" TEXT NOT NULL,
ADD COLUMN     "subjectId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "stars";

-- CreateIndex
CREATE UNIQUE INDEX "Doc_externalId_key" ON "Doc"("externalId");

-- AddForeignKey
ALTER TABLE "Doc" ADD CONSTRAINT "Doc_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
