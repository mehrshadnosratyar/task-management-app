/*
  Warnings:

  - You are about to alter the column `owner` on the `task` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `task` MODIFY `owner` INTEGER NOT NULL;
