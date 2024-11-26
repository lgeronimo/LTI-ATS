/*
  Warnings:

  - You are about to drop the `VacancyStatus` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "VacancyStatusType" AS ENUM ('ACTIVE', 'CLOSED', 'IN_PROCESS', 'CANCELED', 'PAUSED');

-- DropForeignKey
ALTER TABLE "Vacancy" DROP CONSTRAINT "Vacancy_status_id_fkey";

-- AlterTable
ALTER TABLE "Vacancy" ADD COLUMN     "status" "VacancyStatusType" NOT NULL DEFAULT 'ACTIVE';

-- DropTable
DROP TABLE "VacancyStatus";
