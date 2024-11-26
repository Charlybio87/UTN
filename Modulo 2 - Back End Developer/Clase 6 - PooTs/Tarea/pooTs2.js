// Definimos la clase Historial
var Historial = /** @class */ (function () {
    function Historial() {
        this.accion_id_counter = 0;
        this.acciones = [];
    }
    // Método para agregar una acción
    Historial.prototype.agregarAccion = function (tipo, descripcion) {
        this.accion_id_counter++;
        var nuevaAccion = new Accion(this.accion_id_counter, tipo, descripcion, new Date());
        this.acciones.push(nuevaAccion);
    };
    // Método para eliminar una acción por ID
    Historial.prototype.eliminarPorId = function (id) {
        this.acciones = this.acciones.filter(function (accion) { return accion.id !== id; });
    };
    // Método para eliminar todas las acciones
    Historial.prototype.eliminarTodo = function () {
        this.acciones = [];
    };
    // Método para mostrar todas las acciones
    Historial.prototype.mostrarTodo = function () {
        console.table(this.acciones);
    };
    return Historial;
}());
// Definimos la clase Accion
var Accion = /** @class */ (function () {
    function Accion(id, tipo, descripcion, fecha) {
        this.id = id;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
    return Accion;
}());
// Ejemplo de uso
var historial = new Historial();
var historial1 = new Historial();
historial.agregarAccion("Crear", "Se creó un nuevo documento");
historial.agregarAccion("Eliminar", "Se eliminó un documento");
historial.mostrarTodo();
historial.eliminarPorId(1);
historial.mostrarTodo();
historial1.agregarAccion("Crear", "Se creó un nuevo documento en el historial 2");
historial1.agregarAccion("Modificar", "Se modifico un nuevo documento en el historial 2");
historial1.agregarAccion("Agregar", "Se agrego un nuevo documento en el historial 2");
historial1.agregarAccion("Eliminar", "Se elimino un nuevo documento en el historial 2");
historial1.mostrarTodo();
historial1.eliminarPorId(3);
historial1.mostrarTodo();
historial1.eliminarTodo();
console.log(historial1.mostrarTodo());
