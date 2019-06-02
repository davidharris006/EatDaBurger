CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE `burgers_db`.`burgers` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(45) NOT NULL,
  `devoured` BOOLEAN NOT NULL,
  PRIMARY KEY (`Id`));