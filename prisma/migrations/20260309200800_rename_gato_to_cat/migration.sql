/*
  Warnings:

  - You are about to drop the `Gato` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Gato";

-- CreateTable
CREATE TABLE "Cat" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "Cat_pkey" PRIMARY KEY ("id")
);
