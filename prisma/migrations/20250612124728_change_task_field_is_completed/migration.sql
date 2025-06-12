/*
  Warnings:

  - You are about to drop the column `task_is_completed` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "task_is_completed",
ADD COLUMN     "is_completed" BOOLEAN NOT NULL DEFAULT false;
