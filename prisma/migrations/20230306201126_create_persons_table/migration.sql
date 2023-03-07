-- CreateTable
CREATE TABLE `persons` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(255) NULL,
    `middleName` VARCHAR(255) NULL,
    `lastName` VARCHAR(255) NULL,
    `address` VARCHAR(255) NULL,
    `age` INTEGER NULL,
    `personType` ENUM('Employee', 'Student') NULL,
    `emailAddress` VARCHAR(255) NULL,
    `mobileNumber` VARCHAR(255) NULL,
    `personContactDetailsId` INTEGER NULL,
    `dateCreated` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
