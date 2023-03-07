-- CreateTable
CREATE TABLE `person_temperature_logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `temperature` DECIMAL(10, 2) NULL,
    `dateCreated` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdBy` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
