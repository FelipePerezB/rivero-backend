-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_noteId_fkey";

-- AlterTable
ALTER TABLE "File" ALTER COLUMN "noteId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Note" ALTER COLUMN "fileId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "Note"("id") ON DELETE SET NULL ON UPDATE CASCADE;
