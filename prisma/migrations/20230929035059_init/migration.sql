-- AlterEnum
ALTER TYPE "Types" ADD VALUE 'EVALUATION';

-- DropForeignKey
ALTER TABLE "Note" DROP CONSTRAINT "Note_subtopicId_fkey";

-- AlterTable
ALTER TABLE "Note" ALTER COLUMN "subtopicId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_subtopicId_fkey" FOREIGN KEY ("subtopicId") REFERENCES "Subtopic"("id") ON DELETE SET NULL ON UPDATE CASCADE;
