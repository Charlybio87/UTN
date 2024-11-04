CREATE TABLE orden_detalle (
    id INT AUTO_INCREMENT PRIMARY KEY,
	orden_id INT(11) NOT NULL,
    producto_id INT(11) NOT NULL,
    cantidad DECIMAL NOT NULL,
    precio_unitario DECIMAL(10.2) NOT NULL,
    FOREIGN KEY (orden_id) REFERENCES ordenes (id),
    FOREIGN KEY (producto_id) REFERENCES producto (id)
);