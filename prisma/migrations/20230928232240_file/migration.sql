/*
  Warnings:

  - A unique constraint covering the columns `[noteId]` on the table `File` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `noteId` to the `File` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Note" DROP CONSTRAINT "Note_fileId_fkey";

-- AlterTable
ALTER TABLE "File" ADD COLUMN     "noteId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "File_noteId_key" ON "File"("noteId");

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "Note"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
