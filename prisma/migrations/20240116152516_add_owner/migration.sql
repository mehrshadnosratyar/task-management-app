/*
  Warnings:

  - A unique constraint covering the columns `[owner]` on the table `Task` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `owner` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `task` ADD COLUMN `owner` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Task_owner_key` ON `Task`(`owner`);
