CREATE TABLE producto_2 (
	id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(30) NOT NULL,
  descripcion VARCHAR(100) NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  stock INT(10),
  fecha_crecion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  fecha_actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP 
);
INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `stock`, `fecha_crecion`, `fecha_actualizacion`) VALUES (NULL, 'brocoli', '', '150,50', '1000', current_timestamp(), current_timestamp());

UPDATE `productos` SET `stock` = '200' WHERE `productos`.`id` = 2;

DELETE FROM `productos`  WHERE `productos`.`id` = 5;