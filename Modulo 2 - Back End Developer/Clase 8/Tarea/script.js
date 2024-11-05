/**
 * Clase que crea y gestiona un historial.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Accion = /** @class */ (function () {
    function Accion(id, descripcion, fecha) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
    Accion.prototype.mostrarDetalle = function () {
        console.log("ID: ".concat(this.id, ", Descripcion: ").concat(this.descripcion, ", Fecha: ").concat(this.fecha));
    };
    return Accion;
}());
var Cambio = /** @class */ (function () {
    function Cambio(id_cambio, valor_anterio, nuevo_valor) {
        this.id_cambio = id_cambio;
        this.valor_anterio = valor_anterio;
        this.nuevo_valor = nuevo_valor;
    }
    Cambio.prototype.mostrarCambio = function () {
        console.log("ID Cambio: ".concat(this.id_cambio, ", \n      Valor Anterior: ").concat(this.valor_anterio, ",\n      Nuevo Valor: ").concat(this.nuevo_valor));
    };
    return Cambio;
}());
//clases derivadas son una extensión de la clase base
var AccionInicioSesion = /** @class */ (function (_super) {
    __extends(AccionInicioSesion, _super);
    function AccionInicioSesion(id, descripcion, fecha, dispositivo_origen) {
        var _this = _super.call(this, id, descripcion, fecha) || this;
        _this.dispositivo_origen = dispositivo_origen;
        return _this;
    }
    AccionInicioSesion.prototype.mostrarDetalle = function () {
        _super.prototype.mostrarDetalle.call(this);
        console.log("Dispositivo Origen:".concat(this.dispositivo_origen, "."));
    };
    return AccionInicioSesion;
}(Accion));
var AccionCierreSesion = /** @class */ (function (_super) {
    __extends(AccionCierreSesion, _super);
    function AccionCierreSesion(id, descripcion, fecha, dispositivo_origen, tiempo_de_sesion) {
        var _this = _super.call(this, id, descripcion, fecha) || this;
        _this.dispositivo_origen = dispositivo_origen;
        _this.tiempo_de_sesion = tiempo_de_sesion;
        return _this;
    }
    AccionCierreSesion.prototype.mostrarDetalle = function () {
        _super.prototype.mostrarDetalle.call(this);
        console.log("Dispositivo Origen:".concat(this.dispositivo_origen, ", Tiempo de Sesion:").concat(this.tiempo_de_sesion, " minutos."));
    };
    return AccionCierreSesion;
}(Accion));
var AccionActualizacionPerfil = /** @class */ (function (_super) {
    __extends(AccionActualizacionPerfil, _super);
    function AccionActualizacionPerfil(id, descripcion, fecha, cambios) {
        var _this = _super.call(this, id, descripcion, fecha) || this;
        _this.cambios = cambios;
        return _this;
    }
    AccionActualizacionPerfil.prototype.mostrarDetalle = function () {
        _super.prototype.mostrarDetalle.call(this);
        console.log("Cambios:");
        this.cambios.forEach(function (cambio) { return cambio.mostrarCambio(); });
    };
    return AccionActualizacionPerfil;
}(Accion));
var AccionCompra = /** @class */ (function (_super) {
    __extends(AccionCompra, _super);
    function AccionCompra(id, descripcion, fecha, productos, total) {
        var _this = _super.call(this, id, descripcion, fecha) || this;
        _this.productos = productos;
        _this.total = total;
        return _this;
    }
    AccionCompra.prototype.mostrarDetalle = function () {
        _super.prototype.mostrarDetalle.call(this);
        console.log("Productos: ".concat(this.productos.join(', '), ", Total: $").concat(this.total));
    };
    return AccionCompra;
}(Accion));
// Clase derivada AccionEnvioMensaje
var AccionEnvioMensaje = /** @class */ (function (_super) {
    __extends(AccionEnvioMensaje, _super);
    function AccionEnvioMensaje(id, descripcion, fecha, destinatario, mensaje) {
        var _this = _super.call(this, id, descripcion, fecha) || this;
        _this.destinatario = destinatario;
        _this.mensaje = mensaje;
        return _this;
    }
    AccionEnvioMensaje.prototype.mostrarDetalle = function () {
        _super.prototype.mostrarDetalle.call(this);
        console.log("Destinatario: ".concat(this.destinatario, ", Mensaje: ").concat(this.mensaje));
    };
    return AccionEnvioMensaje;
}(Accion));
// Clase Historial
var Historial = /** @class */ (function () {
    function Historial() {
        this.acciones = [];
    }
    Historial.prototype.agregarAccion = function (accion) {
        this.acciones.push(accion);
    };
    Historial.prototype.eliminarAccionPorID = function (id) {
        this.acciones = this.acciones.filter(function (accion) { return accion.id !== id; });
    };
    Historial.prototype.eliminarTodo = function () {
        this.acciones = [];
    };
    Historial.prototype.mostrarHistorial = function () {
        console.log("Historial de Acciones:");
        this.acciones.forEach(function (accion) { return accion.mostrarDetalle(); });
    };
    return Historial;
}());
// Ejemplo de uso
var historial = new Historial();
// Crear acciones
var accion1 = new AccionInicioSesion(1, "Usuario inició sesión", new Date("2024-08-31T12:00:00Z"), "PC de Escritorio");
var cambios = [
    new Cambio(1, "correo@viejo.com", "correo@nuevo.com"),
    new Cambio(2, "1234", "5678")
];
var accion2 = new AccionActualizacionPerfil(2, "Usuario actualizó su perfil", new Date("2024-08-31T12:05:00Z"), cambios);
var accion3 = new AccionCierreSesion(3, "Usuario cerró sesión", new Date("2024-08-31T12:30:00Z"), "PC de Escritorio", 30);
var accion4 = new AccionCompra(4, "Usuario realizó una compra", new Date("2024-08-31T12:45:00Z"), ["Laptop", "Ratón"], 1500);
var accion5 = new AccionEnvioMensaje(5, "Usuario envió un mensaje", new Date("2024-08-31T13:00:00Z"), "admin@example.com", "Hola, necesito ayuda con mi cuenta.");
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
