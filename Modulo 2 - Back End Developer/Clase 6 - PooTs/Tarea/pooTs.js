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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Historial = /** @class */ (function () {
    function Historial(accion_id_counter, acciones) {
        this.accion_id_counter = 0;
        this.acciones = [];
        this.accion_id_counter = accion_id_counter;
        this.acciones = acciones;
    }
    Historial.prototype.agregarAccion = function (accion) {
        this.accion_id_counter++; // Incrementar el contador de ID
        this.acciones.push(__assign({ id: this.accion_id_counter, fecha: new Date() }, accion)); // Agregar la nueva acción al array
    };
    Historial.prototype.eliminarPorId = function (id) {
        this.acciones = this.acciones.filter(function (accion) { return accion.id !== id; }); // Eliminar acción por ID
    };
    Historial.prototype.eliminarTodo = function () {
        this.acciones = []; // Vaciar el array de acciones
    };
    Historial.prototype.mostrarHistorial = function () {
        console.table(this.acciones); // Mostrar el historial de acciones
    };
    return Historial;
}());
// Ejemplo de uso
var historial = new Historial(0, []); // Crear una instancia de Historial
historial.agregarAccion({ tipo: 'registro', descripcion: 'Usuario se registró' }); // Agregar una acción
historial.agregarAccion({ tipo: 'navegacion', descripcion: 'Usuario navegó a la página principal' }); // Agregar otra acción
historial.mostrarHistorial(); // Mostrar historial de acciones
historial.eliminarPorId(1);
historial.mostrarHistorial();
