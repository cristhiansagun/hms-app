-- CreateTable
CREATE TABLE `person_contact_details` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(255) NULL,
    `middleName` VARCHAR(255) NULL,
    `lastName` VARCHAR(255) NULL,
    `address` VARCHAR(255) NULL,
    `mobileNumber` VARCHAR(255) NULL,
    `emailAddress` VARCHAR(255) NULL,
    `dateCreated` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
