/*
  Warnings:

  - You are about to drop the `_BlogToTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_BlogToTag` DROP FOREIGN KEY `_BlogToTag_A_fkey`;

-- DropForeignKey
ALTER TABLE `_BlogToTag` DROP FOREIGN KEY `_BlogToTag_B_fkey`;

-- DropTable
DROP TABLE `_BlogToTag`;

-- CreateTable
CREATE TABLE `Blog_Tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `blog_id` INTEGER NOT NULL,
    `tag_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Blog_Tag` ADD CONSTRAINT `Blog_Tag_blog_id_fkey` FOREIGN KEY (`blog_id`) REFERENCES `Blog`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Blog_Tag` ADD CONSTRAINT `Blog_Tag_tag_id_fkey` FOREIGN KEY (`tag_id`) REFERENCES `Tag`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
