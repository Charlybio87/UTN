//Class empleado

/*
nombre: string
sueldo: number
fecha_contratacion: date
id_empeado: number
puesto: string
 */

class Empleado{
  
  nombre: string
  sueldo: number 
  fecha_contratacion: Date
  id_empleado: number
  puesto: string


  constructor(
    nombre: string, 
    sueldo: number, 
    fecha_contratacion: Date, 
    id_empleado: number,
    puesto: string){
    
    this.nombre = nombre
    this.sueldo = sueldo
    this.fecha_contratacion = fecha_contratacion
    this.id_empleado = id_empleado
    this.puesto = puesto
  }
}

class Casa{
  
  direccion:string 
  id: number 
  propietario: string
  fecha_creacion: Date

  constructor(
    direccion:string, 
    id: number, 
    propietario:string,
    fecha_creacion: Date
  ){

      this.direccion = direccion
      this.id = id
      this.propietario = propietario
      this.fecha_creacion = fecha_creacion
  }
}

// Pasante
/*
tiempo_pasantia_meses:
recomentado_por:
 */

class Pasante extends Empleado{
  
  tiempo_pasantia_meses: number
  recomendado_por: string
  
  constructor(
    nombre: string,
    sueldo: number,
    fecha_contratacion: Date,
    id_empleado: number,
    puesto: string,

    tiempo_pasantia_meses: number,
    recomendado_por: string
  ){
      super(nombre, sueldo, fecha_contratacion, id_empleado, puesto)

      this.tiempo_pasantia_meses = tiempo_pasantia_meses
      this.recomendado_por = recomendado_por
  }
  presentarse(){
    console.log(
`Hola, me llamo ${this.nombre} y soy ${this.puesto}.
Me contrataron el ${this.fecha_contratacion} y estoy trabajando desde hace ${this.tiempo_pasantia_meses} meses. 
Me recomendaron de ${this.recomendado_por}.`)
  }      
}

const pepe = new Pasante('pepe',900,new Date,1,'DEV', 4,'NIT')
pepe.presentarse()