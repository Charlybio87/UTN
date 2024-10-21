// Objeto literal
const usuario_1 = new Usuario( 
  "Juan",
  'suarez',
  25,
  'hoy'
)

const  usuario_2 = new Usuario( 
  "Pepe",
  'suarez',
  25
)

function guardarUsuarioEnDB (usuario){

}

function Usuario (nombre, apellido, edad, direccion = 'S/N'){
  this.apellido= apellido,
  this.nombre= nombre,
  this.edad= edad,
  this.direccion= direccion,
  this.fecha_inicio_ssesion ='hoy'
}

console.log(usuario_1);
console.log(usuario_2);

const auto_1 = new Auto()


function Auto(marca= 'Fiat',nombre='uno',precio=10000,id='0') {
  this.marca = marca
  this.nombre = nombre
  this.precio = precio + precio * 0.21
  this.id = id
  this.conducir_2 = function(){
    console.log('conduciendo')
  }
}

Auto.prototype.conducir = function(){
  console.log('Estoy conduciendo')
} 

console.log(auto_1);
auto_1.conducir_2();
