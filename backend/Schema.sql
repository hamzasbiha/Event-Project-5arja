-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema event_booking
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema event_booking
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `event_booking` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `event_booking` ;

-- -----------------------------------------------------
-- Table `event_booking`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `event_booking`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `role` ENUM('client', 'planner') NOT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `event_booking`.`event`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `event_booking`.`event` (
  `event_id` INT NOT NULL AUTO_INCREMENT,
  `event_name` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `start_date` DATETIME NOT NULL,
  `end_date` DATETIME NOT NULL,
  `venue` VARCHAR(255) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`event_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `event_booking`.`booking`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `event_booking`.`booking` (
  `booking_id` INT NOT NULL AUTO_INCREMENT,
  `booking_date` DATETIME NOT NULL,
  `quantity` INT NOT NULL,
  `user_user_id` INT NOT NULL,
  `event_event_id` INT NOT NULL,
  PRIMARY KEY (`booking_id`, `user_user_id`, `event_event_id`),
  INDEX `fk_booking_user1_idx` (`user_user_id` ASC) VISIBLE,
  INDEX `fk_booking_event1_idx` (`event_event_id` ASC) VISIBLE,
  CONSTRAINT `fk_booking_user1`
    FOREIGN KEY (`user_user_id`)
    REFERENCES `event_booking`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_booking_event1`
    FOREIGN KEY (`event_event_id`)
    REFERENCES `event_booking`.`event` (`event_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `event_booking`.`post`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `event_booking`.`post` (
  `post_id` INT NOT NULL AUTO_INCREMENT,
  `post_text` TEXT NOT NULL,
  `event_event_id` INT NOT NULL,
  `user_user_id` INT NOT NULL,
  PRIMARY KEY (`post_id`, `event_event_id`, `user_user_id`),
  INDEX `fk_post_event1_idx` (`event_event_id` ASC) VISIBLE,
  INDEX `fk_post_user1_idx` (`user_user_id` ASC) VISIBLE,
  CONSTRAINT `fk_post_event1`
    FOREIGN KEY (`event_event_id`)
    REFERENCES `event_booking`.`event` (`event_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_post_user1`
    FOREIGN KEY (`user_user_id`)
    REFERENCES `event_booking`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `event_booking`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `event_booking`.`comment` (
  `comment_id` INT NOT NULL AUTO_INCREMENT,
  `comment_text` TEXT NOT NULL,
  `user_user_id` INT NOT NULL,
  `post_post_id` INT NOT NULL,
  `post_event_event_id` INT NOT NULL,
  PRIMARY KEY (`comment_id`, `user_user_id`, `post_post_id`, `post_event_event_id`),
  INDEX `fk_comment_user1_idx` (`user_user_id` ASC) VISIBLE,
  INDEX `fk_comment_post1_idx` (`post_post_id` ASC, `post_event_event_id` ASC) VISIBLE,
  CONSTRAINT `fk_comment_user1`
    FOREIGN KEY (`user_user_id`)
    REFERENCES `event_booking`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comment_post1`
    FOREIGN KEY (`post_post_id` , `post_event_event_id`)
    REFERENCES `event_booking`.`post` (`post_id` , `event_event_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `event_booking`.`feedback`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `event_booking`.`feedback` (
  `feedback_id` INT NOT NULL AUTO_INCREMENT,
  `rating` INT NOT NULL,
  `comment` TEXT NULL DEFAULT NULL,
  `user_user_id` INT NOT NULL,
  `event_event_id` INT NOT NULL,
  PRIMARY KEY (`feedback_id`, `user_user_id`, `event_event_id`),
  INDEX `fk_feedback_user1_idx` (`user_user_id` ASC) VISIBLE,
  INDEX `fk_feedback_event1_idx` (`event_event_id` ASC) VISIBLE,
  CONSTRAINT `fk_feedback_user1`
    FOREIGN KEY (`user_user_id`)
    REFERENCES `event_booking`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_feedback_event1`
    FOREIGN KEY (`event_event_id`)
    REFERENCES `event_booking`.`event` (`event_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
