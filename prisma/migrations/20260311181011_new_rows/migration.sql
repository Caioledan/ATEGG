/*
  Warnings:

  - Added the required column `catId` to the `TrainingClass` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TrainingClass" ADD COLUMN     "catId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "TrainingClass" ADD CONSTRAINT "TrainingClass_catId_fkey" FOREIGN KEY ("catId") REFERENCES "Cat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
