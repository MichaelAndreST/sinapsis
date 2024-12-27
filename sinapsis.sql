-- MySQL Script generated by MySQL Workbench
-- Fri Dec 27 06:51:37 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema sinapsis
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sinapsis
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sinapsis` DEFAULT CHARACTER SET utf8 ;
USE `sinapsis` ;

-- -----------------------------------------------------
-- Table `sinapsis`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sinapsis`.`cliente` (
  `idcliente` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  PRIMARY KEY (`idcliente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sinapsis`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sinapsis`.`usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `idCliente` INT NOT NULL,
  `usuario` VARCHAR(30) NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  PRIMARY KEY (`idUsuario`),
  INDEX `fk_usuario_cliente_idx` (`idCliente` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_cliente`
    FOREIGN KEY (`idCliente`)
    REFERENCES `sinapsis`.`cliente` (`idcliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sinapsis`.`campania`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sinapsis`.`campania` (
  `idCampania` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(200) NOT NULL,
  `idUsuario` INT NOT NULL,
  `fechaHoraProgramacion` DATETIME NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  PRIMARY KEY (`idCampania`),
  INDEX `fk_campania_usuario1_idx` (`idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_campania_usuario1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `sinapsis`.`usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sinapsis`.`mensaje`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sinapsis`.`mensaje` (
  `idMensaje` INT NOT NULL AUTO_INCREMENT,
  `idCampania` INT NOT NULL,
  `estadoEnvio` TINYINT(1) NOT NULL,
  `fechaHoraEnvio` DATETIME NOT NULL,
  `mensaje` VARCHAR(160) NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  PRIMARY KEY (`idMensaje`),
  INDEX `fk_mensaje_campania1_idx` (`idCampania` ASC) VISIBLE,
  CONSTRAINT `fk_mensaje_campania1`
    FOREIGN KEY (`idCampania`)
    REFERENCES `sinapsis`.`campania` (`idCampania`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
