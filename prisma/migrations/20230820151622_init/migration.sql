/*
  Warnings:

  - You are about to drop the `GradesOnDocs` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `privacity` to the `Doc` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `Doc` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `role` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'STUDENT', 'TEACHER', 'DIRECTOR');

-- CreateEnum
CREATE TYPE "Privacity" AS ENUM ('PUBLIC', 'PRIVATE', 'RESTRICTED');

-- CreateEnum
CREATE TYPE "DocTypes" AS ENUM ('EVALUATION', 'NOTES', 'EXERCISES');

-- DropForeignKey
ALTER TABLE "GradesOnDocs" DROP CONSTRAINT "GradesOnDocs_docId_fkey";

-- DropForeignKey
ALTER TABLE "GradesOnDocs" DROP CONSTRAINT "GradesOnDocs_gradeId_fkey";

-- AlterTable
ALTER TABLE "Doc" ADD COLUMN     "privacity" "Privacity" NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "DocTypes" NOT NULL,
ALTER COLUMN "content" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL;

-- DropTable
DROP TABLE "GradesOnDocs";
