-- CreateTable
CREATE TABLE "Professor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrainingClass" (
    "id" TEXT NOT NULL,
    "day" TIMESTAMP(3) NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "professorId" TEXT NOT NULL,

    CONSTRAINT "TrainingClass_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TrainingClass" ADD CONSTRAINT "TrainingClass_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
