-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ED
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ED
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ED` DEFAULT CHARACTER SET utf8 ;
USE `ED` ;

-- -----------------------------------------------------
-- Table `ED`.`client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ED`.`client` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NULL,
  `pasword` VARCHAR(45) NULL,
  `phone number` INT NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `lfriend list` LONGTEXT NULL,
  `history event` VARCHAR(45) NULL,
  `address` LONGTEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ED`.`event planer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ED`.`event planer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `phone number` VARCHAR(45) NOT NULL,
  `CIN` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ED`.`event`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ED`.`event` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `eventname` VARCHAR(45) NOT NULL,
  `img` LONGTEXT NOT NULL,
  `video` LONGTEXT NULL,
  `describtion` LONGTEXT NOT NULL,
  `date` DATETIME NOT NULL,
  `price` INT NOT NULL,
  `grade` INT NOT NULL,
  `catgorie` VARCHAR(45) NOT NULL,
  `event planer_id` INT NOT NULL,
  `parcipaction_id` INT NOT NULL,
  `parcipaction_user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `event planer_id`, `parcipaction_id`, `parcipaction_user_id`),
  INDEX `fk_event_event planer_idx` (`event planer_id` ASC) VISIBLE,
  CONSTRAINT `fk_event_event planer`
    FOREIGN KEY (`event planer_id`)
    REFERENCES `ED`.`event planer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ED`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ED`.`admin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ED`.`post`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ED`.`post` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `describtion` LONGTEXT NOT NULL,
  `likes` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`),
  INDEX `fk_post_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_post_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ED`.`client` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ED`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ED`.`comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `describtion` LONGTEXT NOT NULL,
  `likes` INT NULL,
  `post_id` INT NOT NULL,
  `post_user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `post_id`, `post_user_id`),
  INDEX `fk_comments_post1_idx` (`post_id` ASC, `post_user_id` ASC) VISIBLE,
  CONSTRAINT `fk_comments_post1`
    FOREIGN KEY (`post_id` , `post_user_id`)
    REFERENCES `ED`.`post` (`id` , `user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ED`.`feed back`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ED`.`feed back` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `feedback comments` LONGTEXT NULL,
  `feed back writing` VARCHAR(45) NULL,
  `user_id` INT NOT NULL,
  `event_id` INT NOT NULL,
  `event_event planer_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`, `event_id`, `event_event planer_id`),
  INDEX `fk_feed back_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_feed back_event1_idx` (`event_id` ASC, `event_event planer_id` ASC) VISIBLE,
  CONSTRAINT `fk_feed back_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ED`.`client` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_feed back_event1`
    FOREIGN KEY (`event_id` , `event_event planer_id`)
    REFERENCES `ED`.`event` (`id` , `event planer_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ED`.`ticket`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ED`.`ticket` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `price` VARCHAR(45) NULL,
  `event_id` INT NOT NULL,
  `event_event planer_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `event_id`, `event_event planer_id`, `user_id`),
  INDEX `fk_ticket_event1_idx` (`event_id` ASC, `event_event planer_id` ASC) VISIBLE,
  INDEX `fk_ticket_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_ticket_event1`
    FOREIGN KEY (`event_id` , `event_event planer_id`)
    REFERENCES `ED`.`event` (`id` , `event planer_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ticket_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ED`.`client` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
