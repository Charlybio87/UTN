// porque la class Historial no emplea constructor?
// Definimos la clase Historial
class Historial {
  accion_id_counter: number = 0;
  acciones: Accion[] = [];

  // Metodo constructor: no se tienen propiedades para ser inicializadas

  // Método para agregar una acción
  agregarAccion(tipo: string, descripcion: string) {
    this.accion_id_counter++;
    const nuevaAccion = new Accion(this.accion_id_counter, tipo, descripcion, new Date());
    this.acciones.push(nuevaAccion);
  }

  // Método para eliminar una acción por ID
  eliminarPorId(id: number): void {
    this.acciones = this.acciones.filter((accion : Accion) : boolean => accion.id !== id);
  }

  // Método para eliminar todas las acciones
  eliminarTodo() : void {
    this.acciones = [];
  }

  // Método para mostrar todas las acciones
  mostrarTodo() : void {
    console.table(this.acciones)
  }
}

// Definimos la clase Accion
class Accion {
  id: number;
  tipo: string;
  descripcion: string;
  fecha: Date;

  constructor(id: number, tipo: string, descripcion: string, fecha: Date) {
    this.id = id;
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.fecha = fecha;
  }
}

// Ejemplo de uso
const historial = new Historial()
const historial1 = new Historial() 
historial.agregarAccion("Crear", "Se creó un nuevo documento")
historial.agregarAccion("Eliminar", "Se eliminó un documento")
historial.mostrarTodo()
historial.eliminarPorId(1)
historial.mostrarTodo()

historial1.agregarAccion("Crear","Se creó un nuevo documento en el historial 2")
historial1.agregarAccion("Modificar","Se modifico un nuevo documento en el historial 2")
historial1.agregarAccion("Agregar","Se agrego un nuevo documento en el historial 2")
historial1.agregarAccion("Eliminar","Se elimino un nuevo documento en el historial 2")
historial1.mostrarTodo()
historial1.eliminarPorId(3)
historial1.mostrarTodo()
historial1.eliminarTodo()
console.log(historial1.mostrarTodo())
