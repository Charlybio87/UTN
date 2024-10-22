// Array de usuarios
const usuarios = [
  new Usuario(1, 'Juan Pérez', 'juan@example.com', 'password'),
  new Usuario(2, 'Ana Gómez', 'ana@example.com', 'mypassword'),
  new Usuario(3, 'Luis Fernández', 'luis@example.com', 'securepassword')
];
// Array de proveedores
const proveedores = [
  new Proveedor(1, 'Proveedor A', 'Calle Falsa 123', '555-1234', 'contacto@proveedora.com', [
      { id: 1, nombre: 'Producto 1' },
      { id: 2, nombre: 'Producto 2' }
  ]),
  new Proveedor(2, 'Proveedor B', 'Avenida Siempre Viva 456', '555-5678', 'info@proveedorb.com', [
      { id: 3, nombre: 'Producto 3' },
      { id: 4, nombre: 'Producto 4' }
  ])
];

// FUnciones Constructoras
/**
 * POO - Funcion Constructora
 * 
 */
function Usuario(nombre, id, email, password) {
  this.nombre = nombre,
  this.id = id,
  this.email = email,
  this.password = password,
  this.activo = true
  Usuario.prototype.setPassword = function(newPassword) {
    //modificando pass al concatenarle 123
    this.password = `${this.password}123`
  }
  Usuario.prototype.getInformacion  = function(){
    // devolver info de usuario
    return `${this.id} ${this.nombre} ${this.email} ${this.activo} `
  }
  Usuario.prototype.delete = function() {
    // deshabilitar usuario
    this.activo = false
  }
}
/**
 * POO - Funcion Constructora
 * 
 */
function Proveedor(nombre, id, direccion,telefono, email, productos) {
  this.nombre = nombre
  this.id = id
  this.direccion = direccion
  this.telefono = telefono
  this. email = email
  this.productos = productos
  Proveedor.prototype.getProductoPorId = function(id){
    return this.productos.find(producto => producto.id === id) || null;
  //   for (let producto of this.productos) {
  //     if (producto.id === id) {
  //         return producto; // Devuelve el producto si se encuentra
  //     }
  //   }
  // return null; // Devuelve null si no se encuentra el producto
  }
}

// Ejemplo de uso
console.log(usuarios[0].password);
usuarios[0].setPassword('nuevacontraseña');
console.log(usuarios[0].password);
console.log(usuarios[0].getInformacion());

usuarios[1].delete();
console.log(usuarios[1].getInformacion());

const producto = proveedores[0].getProductoPorId(1);
console.log(producto);
