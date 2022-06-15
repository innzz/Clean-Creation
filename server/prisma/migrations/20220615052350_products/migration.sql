/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(191) NOT NULL,
    `heading` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `calories` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `regularPrice` VARCHAR(191) NOT NULL,
    `protein` INTEGER NOT NULL,
    `carb` INTEGER NOT NULL,
    `fat` INTEGER NOT NULL,
    `fibre` INTEGER NOT NULL,
    `saturatedFat` INTEGER NOT NULL,
    `cholesterol` INTEGER NOT NULL,
    `sodium` INTEGER NOT NULL,
    `totalSugar` INTEGER NOT NULL,
    `includedSugar` INTEGER NOT NULL,
    `ingredients` VARCHAR(191) NOT NULL,
    `allergens` VARCHAR(191) NOT NULL,
    `heating` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
