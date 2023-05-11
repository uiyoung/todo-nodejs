/*
  Warnings:

  - You are about to drop the column `createAt` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Todo` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Todo` DROP COLUMN `createAt`,
    DROP COLUMN `updateAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;
