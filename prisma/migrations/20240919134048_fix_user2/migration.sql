-- DropIndex
DROP INDEX `Blog_creator_id_fkey` ON `Blog`;

-- AddForeignKey
ALTER TABLE `Blog` ADD CONSTRAINT `Blog_creator_id_fkey` FOREIGN KEY (`creator_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
