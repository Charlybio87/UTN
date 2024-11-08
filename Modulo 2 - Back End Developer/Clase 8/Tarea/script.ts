/**
 * Clase que crea y gestiona un historial.
 */

class Accion {
  private static contador: number = 0
  id: number
  descripcion: string
  fecha: Date

  constructor(
    descripcion: string,
    fecha: Date
  ){
    Accion.contador++
    this.id = Accion.contador
    this.descripcion = descripcion
    this.fecha = fecha
  }
  mostrarDetalle() : string {
    return (`
      ID: ${this.id} 
      Descripcion: ${this.descripcion}
      Fecha: ${this.fecha}`
    )
  }
}

class Cambio {
  id_cambio: number
  valor_anterio: string
  nuevo_valor: string

  constructor(
    id_cambio: number,
    valor_anterio: string,
    nuevo_valor: string
  ) {
    this.id_cambio = id_cambio
    this.valor_anterio = valor_anterio
    this.nuevo_valor = nuevo_valor    
  }
  mostrarCambio(): string {
    return (`
          ID Cambio: ${this.id_cambio}
          Valor Anterior: ${this.valor_anterio} => Valor Nuevo: ${this.nuevo_valor}`
    )
  }
}

//clases derivadas son una extensión de la clase base

class AccionInicioSesion extends Accion{
  dispositivo_origen: string 

  constructor(
    descripcion: string,
    fecha: Date,

    dispositivo_origen: string
  ){
    super(descripcion,fecha) // palabra clave super(), permite que hereden las propiedades id, descripcion y fecha
    this.dispositivo_origen = dispositivo_origen // propiedad adicional
  }
  // Polimorfismo
  mostrarDetalle() : string {
    const mostrarInfo = super.mostrarDetalle() // muestra detalles de la propiedad de la clase base (padre)
    return (
      `${mostrarInfo}
        Dispositivo Origen: ${this.dispositivo_origen}.`
    )// incluye detalles especificos de esa accion clase derivada (hija)
  }
}
class AccionCierreSesion extends Accion{
  dispositivo_origen: string 
  tiempo_de_sesion: number

  constructor(
    descripcion: string,
    fecha: Date,

    dispositivo_origen: string,
    tiempo_de_sesion: number
  ){
    super(descripcion,fecha)
    this.dispositivo_origen = dispositivo_origen
    this.tiempo_de_sesion = tiempo_de_sesion
  }
  mostrarDetalle() : string {
    const mostrarInfo = super.mostrarDetalle()
    return (
      `${mostrarInfo} 
        Dispositivo Origen: ${this.dispositivo_origen} 
        Tiempo de Sesion: ${this.tiempo_de_sesion} minutos.`
    )
  }
}

class AccionActualizacionPerfil extends Accion {
  cambios: Cambio[] // Composicion

  constructor(
    descripcion: string,
    fecha: Date,

    cambios: Cambio[]
  ) {
    super(descripcion,fecha)
    this.cambios = cambios
  }

  mostrarDetalle(): string {
    const mostrarInfo = super.mostrarDetalle() // Muestra los detalles básicos de la acción
    const cambiosDetalles = this.cambios.map(cambio => cambio.mostrarCambio()).join(', ')// Itera sobre cada cambio y muestra sus detalles
    return (
      `${mostrarInfo} 
        Cambios: ${cambiosDetalles}` 
    )
    // this.cambios.map(cambio => cambio.mostrarCambio());
    // for (const cambio of this.cambios) {
    //  cambio.mostrarCambio();
    // }
    // this.cambios.forEach(cambio => {
    //  cambio.mostrarCambio();
    // });
  }
}

class AccionCompra extends Accion {
  productos: string[];
  total: number;

  constructor(
    descripcion: string, 
    fecha: Date, 
    productos: string[], 
    total: number
  ) {
      super(descripcion, fecha);
      this.productos = productos;
      this.total = total;
    }

  mostrarDetalle(): string {
    const mostrarInfo = super.mostrarDetalle()
    return (
      `${mostrarInfo}
        Productos: ${this.productos.join(', ')}
        Total: $${this.total}`
    )
  }
}

// Clase derivada AccionEnvioMensaje
class AccionEnvioMensaje extends Accion {
  destinatario: string;
  mensaje: string;

  constructor(descripcion: string, fecha: Date, destinatario: string, mensaje: string) {
      super(descripcion, fecha);
      this.destinatario = destinatario;
      this.mensaje = mensaje;
  }

  mostrarDetalle(): string {
    const mostrarInfo = super.mostrarDetalle()
    return (
      `${mostrarInfo} 
        Destinatario: ${this.destinatario}
        Mensaje: ${this.mensaje}`
    )
  }
}

// Clase Historial
class Historial {
  acciones: Accion[]

  constructor() {
    this.acciones = [];
  }
  agregarAccion(accion: Accion): void {
    this.acciones.push(accion);
  }

  eliminarAccionPorID(id: number): void {
    this.acciones = this.acciones.filter(accion => accion.id !== id);
  }

  eliminarTodo(): void {
    this.acciones = [];      
  }
  /**
   * Usa map cuando necesites transformar un array y obtener un nuevo array con los resultados.
   * Usa forEach cuando solo necesites ejecutar una función para cada elemento del array sin necesidad de un resultado acumulado.
   * @returns nuevo array 
   */
  mostrarHistorial(id: number | void): void | string {
    if (id) {
      this.acciones.forEach((accion: Accion) => {
        if (accion.id === id) {
          return console.log(accion.mostrarDetalle())
        }
      })
    } else {
      return console.log(this.acciones.map(accion => accion.mostrarDetalle()).join('\n'))
    }
  }
  // mostrarHistorial(id: number | void ): string | void {
  //   if (id) {
  //     const accion : Accion | undefined = this.acciones.find(
  //       (accion : Accion) : boolean => accion.id === id)
  //     if (accion) {
  //       return accion.mostrarDetalle()
  //     }
  //   } else {
  //     return this.acciones.map(accion => accion.mostrarDetalle()).join('\n')
  //   }
  // }
  // mostrarHistorial():string{
  //   return this.acciones.map(accion => accion.mostrarDetalle()).join('\n')
  // }
}

//Implementacion del Ejemplo de uso:

const historial = new Historial();
const cambios = [
  new Cambio(1, "correo@viejo.com", "correo@nuevo.com"),
  new Cambio(2, "1234", "5678")
];

// Crear acciones
const accion1 = new AccionInicioSesion("Usuario inició sesión", new Date(), "PC de Escritorio");
const accion2 = new AccionActualizacionPerfil("Usuario actualizó su perfil", new Date(), cambios);
const accion3 = new AccionCierreSesion("Usuario cerró sesión", new Date(), "PC de Escritorio", 30);
const accion4 = new AccionCompra("Usuario realizó una compra", new Date(), ["Laptop", "Ratón"], 1500);
const accion5 = new AccionEnvioMensaje("Usuario envió un mensaje", new Date(), "admin@example.com", "Hola, necesito ayuda con mi cuenta.");

// Agregar acciones al historial
historial.agregarAccion(accion1);
historial.agregarAccion(accion2);
historial.agregarAccion(accion3);
historial.agregarAccion(accion4);
historial.agregarAccion(accion5);

// Mostrar el historial
console.log(`Historial de Acciones:`)
historial.mostrarHistorial()

// // Eliminar una acción por ID
// historial.eliminarAccionPorID(2) // Eliminar la acción de actualización de perfil

// // Mostrar el historial después de la eliminación
// console.log("\nHistorial después de eliminar la acción de actualización de perfil:");
// console.log(historial.mostrarHistorial())

// // Eliminar todo el historial
// historial.eliminarTodo()

// // Mostrar el historial después de eliminar todo
// console.log("\nHistorial después de eliminar todas las acciones:");
// console.log(historial.mostrarHistorial())
