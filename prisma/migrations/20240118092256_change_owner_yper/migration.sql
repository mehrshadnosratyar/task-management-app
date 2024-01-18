-- DropIndex
DROP INDEX `Task_owner_key` ON `task`;

-- AlterTable
ALTER TABLE `task` MODIFY `owner` VARCHAR(191) NOT NULL;
