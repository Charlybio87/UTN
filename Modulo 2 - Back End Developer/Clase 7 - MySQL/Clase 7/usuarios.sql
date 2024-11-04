CREATE TABLE usuarios (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL,
    direccion VARCHAR(255),
    telefono VARCHAR(15),
    role VARCHAR(15) DEFAULT 'user' NOT NULL,
    fecha_crecion TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);
INSERT INTO usuarios (
	id,
	nombre,
	email,
	contrasena,
	direccion,
	telefono,
	role,
	fecha_crecion
) VALUES (
	NULL,
    'charly',
    'charly@gmail.com',
    'charly123',
    "Yrigoyen 123",
    "+123456789",
    NULL,
    NULL
);
UPDATE `usuarios` SET `email` = 'maria12@gmail.com' WHERE `usuarios`.`id` = 3;
DELETE FROM `usuarios`  WHERE `usuarios`.`id` = 5;