-- DropForeignKey
ALTER TABLE "GradesOnDocs" DROP CONSTRAINT "GradesOnDocs_docId_fkey";

-- DropForeignKey
ALTER TABLE "GradesOnDocs" DROP CONSTRAINT "GradesOnDocs_gradeId_fkey";

-- AddForeignKey
ALTER TABLE "GradesOnDocs" ADD CONSTRAINT "GradesOnDocs_docId_fkey" FOREIGN KEY ("docId") REFERENCES "Doc"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GradesOnDocs" ADD CONSTRAINT "GradesOnDocs_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "Grade"("id") ON DELETE CASCADE ON UPDATE CASCADE;
