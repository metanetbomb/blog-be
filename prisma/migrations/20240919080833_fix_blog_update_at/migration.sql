/*
  Warnings:

  - Made the column `update_at` on table `Blog` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Blog` MODIFY `update_at` DATETIME(3) NOT NULL;
