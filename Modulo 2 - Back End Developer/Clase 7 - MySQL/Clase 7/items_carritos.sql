CREATE TABLE items_carritos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    carrito_id INT(11) NOT NULL,
    producto_id INT(11) NOT NULL,
    cantidad DECIMAL NOT NULL,
    FOREIGN KEY (carrito_id) REFERENCES carritos (id),
    FOREIGN KEY (producto_id) REFERENCES producto (id)
);
INSERT INTO `items_carritos` (`id`, `carrito_id`, `producto_id`, `cantidad`) VALUES (NULL, '1', '1', '100');