/*Objeto literal */

const usuario = {
  nombre: 'pepe',
  email: 'pepe@gmail.com',
  id: 1,
  fecha_creacion: new Date()
}

/** 
 * "Idem a:"
 * function Usuario_Construtor(nombre){
 * this.nombre= nombre
 * }
 */

// Clases

class Usuario {
  nombre = 'pepe'
  apellido = 'suarez'
  edad = 90
  //Es una funcion que se ejecutara al INSTANCIARSE en la clase
  constructor(nombre, email, id, fecha_creacion,edad) {
    this.nombre = nombre || 'charly'
    this.email = email
    console.log(this);
  }
}
const usuario_2 = new Usuario('carlos','carlosbio87@gmail')
const usuario_3 = new Usuario()
// console.log(usuario_2,usuario_3);

class Casa {
  constructor(direccion, id, propietario){
    this.direccion = direccion
    this.id = id
    this.propietario = propietario
    this.fecha_creacion = new Date()
  }
}

const casa_1 = new Casa('yrigoyen 5555', 1 , 'Colaizzo')
let contador_casas = 0


class GestorCasa {
  constructor(id){
    this.casas = []
    this.id = id
  }
  mostrarCasas(){
    console.log('Las casas del gestor '+ this.id + ' son: ', this.casas );
  }
  // mostrarCasas2 = () => {console.log('hola')}
  
  crearCasa(direccion, propietario){
    const nueva_casa = new Casa(direccion,contador_casas,propietario)
    this.casas.push(nueva_casa)
    contador_casas++ //incremento contador para que la prox casa tenga un id distinto

    return this.casas
  }
}

const gestor_casa_1 = new GestorCasa(1)
const gestor_casa_2 = new GestorCasa(2)
gestor_casa_1.mostrarCasas()
gestor_casa_2.mostrarCasas()

let resultado1 = gestor_casa_1.crearCasa('9 de julio','San Martin')
let resultado2 = [...gestor_casa_1.crearCasa('9 de julio','Moreno')]
let resultado3 = gestor_casa_1.crearCasa('9 de julio','Belgrano')
console.log(resultado2);
console.log(resultado1);
console.log(gestor_casa_1);

