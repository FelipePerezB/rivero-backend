/*
  Warnings:

  - You are about to drop the column `subjectId` on the `School` table. All the data in the column will be lost.
  - You are about to drop the column `instituteId` on the `User` table. All the data in the column will be lost.
  - Made the column `schoolId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "School" DROP CONSTRAINT "School_subjectId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_schoolId_fkey";

-- AlterTable
ALTER TABLE "School" DROP COLUMN "subjectId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "instituteId",
ALTER COLUMN "schoolId" SET NOT NULL;

-- CreateTable
CREATE TABLE "GradesOnSchools" (
    "gradeId" INTEGER NOT NULL,
    "schoolId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),

    CONSTRAINT "GradesOnSchools_pkey" PRIMARY KEY ("gradeId","schoolId")
);

-- CreateTable
CREATE TABLE "SubjectsOnSchools" (
    "subjectId" INTEGER NOT NULL,
    "schoolId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),

    CONSTRAINT "SubjectsOnSchools_pkey" PRIMARY KEY ("subjectId","schoolId")
);

-- CreateTable
CREATE TABLE "GradesOnDocs" (
    "docId" INTEGER NOT NULL,
    "gradeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),

    CONSTRAINT "GradesOnDocs_pkey" PRIMARY KEY ("gradeId","docId")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GradesOnSchools" ADD CONSTRAINT "GradesOnSchools_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "Grade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GradesOnSchools" ADD CONSTRAINT "GradesOnSchools_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectsOnSchools" ADD CONSTRAINT "SubjectsOnSchools_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectsOnSchools" ADD CONSTRAINT "SubjectsOnSchools_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GradesOnDocs" ADD CONSTRAINT "GradesOnDocs_docId_fkey" FOREIGN KEY ("docId") REFERENCES "Doc"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GradesOnDocs" ADD CONSTRAINT "GradesOnDocs_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "Grade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
