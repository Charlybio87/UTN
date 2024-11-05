/**
 * Clase que crea y gestiona un historial.
 */

class Accion {

  id: number
  descripcion: string
  fecha: Date

  constructor(
    id: number,
    descripcion: string,
    fecha: Date
  ){
    this.id = id
    this.descripcion = descripcion
    this.fecha = fecha
  }
  mostrarDetalle() :void {
    console.log(`ID: ${this.id}, Descripcion: ${this.descripcion}, Fecha: ${this.fecha}`)
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
  mostrarCambio(): void {
    console.log(`ID Cambio: ${this.id_cambio}, 
      Valor Anterior: ${this.valor_anterio},
      Nuevo Valor: ${this.nuevo_valor}`);
  }
}

//clases derivadas son una extensión de la clase base

class AccionInicioSesion extends Accion{
  dispositivo_origen: string 

  constructor(
    id: number,
    descripcion: string,
    fecha: Date,

    dispositivo_origen: string
  ){
    super(id,descripcion,fecha)
    this.dispositivo_origen = dispositivo_origen
  }
  mostrarDetalle() : void {
    super.mostrarDetalle()
    console.log(`Dispositivo Origen:${this.dispositivo_origen}.`)
    }
}
class AccionCierreSesion extends Accion{
  dispositivo_origen: string 
  tiempo_de_sesion: number

  constructor(
    id: number,
    descripcion: string,
    fecha: Date,

    dispositivo_origen: string,
    tiempo_de_sesion: number
  ){
    super(id,descripcion,fecha)
    this.dispositivo_origen = dispositivo_origen
    this.tiempo_de_sesion = tiempo_de_sesion
  }
  mostrarDetalle() : void {
    super.mostrarDetalle()
    console.log(`Dispositivo Origen:${this.dispositivo_origen}, Tiempo de Sesion:${this.tiempo_de_sesion} minutos.`)
    }
}

class AccionActualizacionPerfil extends Accion {
  cambios: Cambio[]

  constructor(
    id: number,
    descripcion: string,
    fecha: Date,

    cambios: Cambio[]
  ) {
    super(id, descripcion,fecha)
    this.cambios = cambios
  }

  mostrarDetalle(): void {
    super.mostrarDetalle();
    console.log(`Cambios:`);
    this.cambios.forEach(cambio => cambio.mostrarCambio());
}
}

class AccionCompra extends Accion {
    productos: string[];
    total: number;

    constructor(id: number, descripcion: string, fecha: Date, productos: string[], total: number) {
        super(id, descripcion, fecha);
        this.productos = productos;
        this.total = total;
    }

    mostrarDetalle(): void {
        super.mostrarDetalle();
        console.log(`Productos: ${this.productos.join(', ')}, Total: $${this.total}`);
    }
}

// Clase derivada AccionEnvioMensaje
class AccionEnvioMensaje extends Accion {
    destinatario: string;
    mensaje: string;

    constructor(id: number, descripcion: string, fecha: Date, destinatario: string, mensaje: string) {
        super(id, descripcion, fecha);
        this.destinatario = destinatario;
        this.mensaje = mensaje;
    }

    mostrarDetalle(): void {
        super.mostrarDetalle();
        console.log(`Destinatario: ${this.destinatario}, Mensaje: ${this.mensaje}`);
    }
}

// Clase Historial
class Historial {
    acciones: Accion[] = [];

    agregarAccion(accion: Accion): void {
        this.acciones.push(accion);
    }

    eliminarAccionPorID(id: number): void {
        this.acciones = this.acciones.filter(accion => accion.id !== id);
    }

    eliminarTodo(): void {
        this.acciones = [];
    }

    mostrarHistorial(): void {
        console.log(`Historial de Acciones:`);
        this.acciones.forEach(accion => accion.mostrarDetalle());
    }
}

// Ejemplo de uso
const historial = new Historial();

// Crear acciones
const accion1 = new AccionInicioSesion(1, "Usuario inició sesión", new Date("2024-08-31T12:00:00Z"), "PC de Escritorio");
const cambios = [
    new Cambio(1, "correo@viejo.com", "correo@nuevo.com"),
    new Cambio(2, "1234", "5678")
];
const accion2 = new AccionActualizacionPerfil(2, "Usuario actualizó su perfil", new Date("2024-08-31T12:05:00Z"), cambios);
const accion3 = new AccionCierreSesion(3, "Usuario cerró sesión", new Date("2024-08-31T12:30:00Z"), "PC de Escritorio", 30);
const accion4 = new AccionCompra(4, "Usuario realizó una compra", new Date("2024-08-31T12:45:00Z"), ["Laptop", "Ratón"], 1500);
const accion5 = new AccionEnvioMensaje(5, "Usuario envió un mensaje", new Date("2024-08-31T13:00:00Z"), "admin@example.com", "Hola, necesito ayuda con mi cuenta.");

// Agregar acciones al historial
historial.agregarAccion(accion1);
historial.agregarAccion(accion2);
historial.agregarAccion(accion3);
historial.agregarAccion(accion4);
historial.agregarAccion(accion5);

// Mostrar el historial
historial.mostrarHistorial();

// Eliminar una acción por ID
historial.eliminarAccionPorID(2); // Eliminar la acción de actualización de perfil

// Mostrar el historial después de la eliminación
console.log("\nHistorial después de eliminar la acción de actualización de perfil:");
historial.mostrarHistorial();

// Eliminar todo el historial
historial.eliminarTodo();

// Mostrar el historial después de eliminar todo
console.log("\nHistorial después de eliminar todas las acciones:");
historial.mostrarHistorial();