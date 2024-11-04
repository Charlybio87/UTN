CREATE TABLE carritos (
    id INT AUTO_INCREMENT PRIMARY KEY,
	usuario_id INT(11) NOT NULL,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
INSERT INTO `carritos` (`id`, `usuario_id`, `creado_en`) VALUES (NULL, '1', current_timestamp());