/*
  Warnings:

  - You are about to drop the `SubjectsOnSchools` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GradesOnSchools" DROP CONSTRAINT "GradesOnSchools_schoolId_fkey";

-- DropForeignKey
ALTER TABLE "SubjectsOnSchools" DROP CONSTRAINT "SubjectsOnSchools_schoolId_fkey";

-- DropForeignKey
ALTER TABLE "SubjectsOnSchools" DROP CONSTRAINT "SubjectsOnSchools_subjectId_fkey";

-- AlterTable
ALTER TABLE "Doc" ADD COLUMN     "subtopicId" INTEGER;

-- DropTable
DROP TABLE "SubjectsOnSchools";

-- CreateTable
CREATE TABLE "Subtopic" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),
    "subjectId" INTEGER,
    "topicId" INTEGER NOT NULL,

    CONSTRAINT "Subtopic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Subtopic_name_key" ON "Subtopic"("name");

-- AddForeignKey
ALTER TABLE "Doc" ADD CONSTRAINT "Doc_subtopicId_fkey" FOREIGN KEY ("subtopicId") REFERENCES "Subtopic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subtopic" ADD CONSTRAINT "Subtopic_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subtopic" ADD CONSTRAINT "Subtopic_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
