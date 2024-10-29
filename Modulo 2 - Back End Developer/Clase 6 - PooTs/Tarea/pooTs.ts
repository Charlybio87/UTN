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

class Historial {
  accion_id_counter: number = 0;
  acciones: Array<{id: number, tipo: string, descripcion: string, fecha: Date}> = [];

  constructor(accion_id_counter: number, acciones: Array<{id: number, tipo: string, descripcion: string, fecha: Date}>) {
    this.accion_id_counter = accion_id_counter;
    this.acciones = acciones;
  }

  agregarAccion(accion: { tipo: string, descripcion: string }) {
    this.accion_id_counter++; // Incrementar el contador de ID
    this.acciones.push({ id: this.accion_id_counter, fecha: new Date(), ...accion }); // Agregar la nueva acción al array
  }

  eliminarPorId(id: number) {
    this.acciones = this.acciones.filter(accion => accion.id !== id); // Eliminar acción por ID (filtra el id distinto al buscado)
    // this.acciones = this.acciones.find(accion => accion.id === 'id');
    // this.acciones = this.acciones.findIndex(accion => accion.id === 'id');
  }

  eliminarTodo() {
    this.acciones = []; // Vaciar el array de acciones
  }

  mostrarHistorial() {
    console.table(this.acciones); // Mostrar el historial de acciones
  }
}

// Ejemplo de uso
const historial = new Historial(0, []); // Crear una instancia de Historial
historial.agregarAccion({ tipo: 'registro', descripcion: 'Usuario se registró' }); // Agregar una acción
historial.agregarAccion({ tipo: 'navegacion', descripcion: 'Usuario navegó a la página principal' }); // Agregar otra acción
historial.mostrarHistorial(); // Mostrar historial de acciones
historial.eliminarPorId(1);
historial.mostrarHistorial(); 