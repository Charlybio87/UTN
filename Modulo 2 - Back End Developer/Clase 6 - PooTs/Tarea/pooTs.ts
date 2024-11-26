/**
 * Acciones:
 * registro
 * navegacion
 * busqueda
 * visualizacion_contenido
 * interacion_contenido
 * configuracion_perfil
 * notificacion
 * compras
 * mensajeria
 * ajustes
 * soporte
 */

class Historial_1 {
  accion_id_counter: number = 0;
  acciones: Array<{id: number, tipo: string, descripcion: string, fecha: Date}> = [];

  constructor(acciones: Array<{id: number, tipo: string, descripcion: string, fecha: Date}>) {
    this.accion_id_counter = 0;
    this.acciones = acciones;
  }

  agregarAccion(accion: { tipo: string, descripcion: string }) {
    this.accion_id_counter++; // Incrementar el contador de ID
    this.acciones.push({ id: this.accion_id_counter, fecha: new Date(), ...accion }); // Agregar la nueva acción al array
  }

  eliminarPorId(id: number) {
    this.acciones = this.acciones.filter(accion => accion.id !== id); // filtra los id distinto al buscado                                 
  }

  eliminarTodo() {
    this.acciones = []; // Vacia el array de acciones
  }

  mostrarHistorial() {
    console.table(this.acciones); // Mostrar el historial de acciones
  }
}

// Ejemplo de uso
const historial_2 = new Historial_1([]); // Crear una instancia de Historial_1
const historial_1 = new Historial_1([]); // Crear una instancia de Historial_1
historial_2.agregarAccion({ tipo: 'registro', descripcion: 'Usuario se registró' }); // Agregar una acción
historial_2.agregarAccion({ tipo: 'navegacion', descripcion: 'Usuario navegó a la página principal' }); // Agregar otra acción
historial_1.agregarAccion({ tipo: 'configuracion', descripcion: 'Usuario configuro la pantalla' }); // Agregar una acción
historial_1.agregarAccion({ tipo: 'notificacion', descripcion: 'Usuario recibio una notificacion de la temperatura' }); // Agregar otra acción
historial_2.mostrarHistorial(); // Mostrar historial de acciones
historial_1.mostrarHistorial(); // Mostrar historial de acciones