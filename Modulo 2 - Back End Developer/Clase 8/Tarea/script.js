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
    function Accion(descripcion, fecha) {
        Accion.contador++;
        this.id = Accion.contador;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
    Accion.prototype.mostrarDetalle = function () {
        return ("\n      ID: ".concat(this.id, " \n      Descripcion: ").concat(this.descripcion, "\n      Fecha: ").concat(this.fecha));
    };
    Accion.contador = 0;
    return Accion;
}());
var Cambio = /** @class */ (function () {
    function Cambio(id_cambio, valor_anterio, nuevo_valor) {
        this.id_cambio = id_cambio;
        this.valor_anterio = valor_anterio;
        this.nuevo_valor = nuevo_valor;
    }
    Cambio.prototype.mostrarCambio = function () {
        return ("\n          ID Cambio: ".concat(this.id_cambio, "\n          Valor Anterior: ").concat(this.valor_anterio, " => Valor Nuevo: ").concat(this.nuevo_valor));
    };
    return Cambio;
}());
//clases derivadas son una extensión de la clase base
var AccionInicioSesion = /** @class */ (function (_super) {
    __extends(AccionInicioSesion, _super);
    function AccionInicioSesion(descripcion, fecha, dispositivo_origen) {
        var _this = _super.call(this, descripcion, fecha) || this; // palabra clave super(), permite que hereden las propiedades id, descripcion y fecha
        _this.dispositivo_origen = dispositivo_origen; // propiedad adicional
        return _this;
    }
    // Polimorfismo
    AccionInicioSesion.prototype.mostrarDetalle = function () {
        var mostrarInfo = _super.prototype.mostrarDetalle.call(this); // muestra detalles de la propiedad de la clase base (padre)
        return ("".concat(mostrarInfo, "\n        Dispositivo Origen: ").concat(this.dispositivo_origen, ".")); // incluye detalles especificos de esa accion clase derivada (hija)
    };
    return AccionInicioSesion;
}(Accion));
var AccionCierreSesion = /** @class */ (function (_super) {
    __extends(AccionCierreSesion, _super);
    function AccionCierreSesion(descripcion, fecha, dispositivo_origen, tiempo_de_sesion) {
        var _this = _super.call(this, descripcion, fecha) || this;
        _this.dispositivo_origen = dispositivo_origen;
        _this.tiempo_de_sesion = tiempo_de_sesion;
        return _this;
    }
    AccionCierreSesion.prototype.mostrarDetalle = function () {
        var mostrarInfo = _super.prototype.mostrarDetalle.call(this);
        return ("".concat(mostrarInfo, " \n        Dispositivo Origen: ").concat(this.dispositivo_origen, " \n        Tiempo de Sesion: ").concat(this.tiempo_de_sesion, " minutos."));
    };
    return AccionCierreSesion;
}(Accion));
var AccionActualizacionPerfil = /** @class */ (function (_super) {
    __extends(AccionActualizacionPerfil, _super);
    function AccionActualizacionPerfil(descripcion, fecha, cambios) {
        var _this = _super.call(this, descripcion, fecha) || this;
        _this.cambios = cambios;
        return _this;
    }
    AccionActualizacionPerfil.prototype.mostrarDetalle = function () {
        var mostrarInfo = _super.prototype.mostrarDetalle.call(this); // Muestra los detalles básicos de la acción
        var cambiosDetalles = this.cambios.map(function (cambio) { return cambio.mostrarCambio(); }).join(', '); // Itera sobre cada cambio y muestra sus detalles
        return ("".concat(mostrarInfo, " \n        Cambios: ").concat(cambiosDetalles));
        // this.cambios.map(cambio => cambio.mostrarCambio());
        // for (const cambio of this.cambios) {
        //  cambio.mostrarCambio();
        // }
        // this.cambios.forEach(cambio => {
        //  cambio.mostrarCambio();
        // });
    };
    return AccionActualizacionPerfil;
}(Accion));
var AccionCompra = /** @class */ (function (_super) {
    __extends(AccionCompra, _super);
    function AccionCompra(descripcion, fecha, productos, total) {
        var _this = _super.call(this, descripcion, fecha) || this;
        _this.productos = productos;
        _this.total = total;
        return _this;
    }
    AccionCompra.prototype.mostrarDetalle = function () {
        var mostrarInfo = _super.prototype.mostrarDetalle.call(this);
        return ("".concat(mostrarInfo, "\n        Productos: ").concat(this.productos.join(', '), "\n        Total: $").concat(this.total));
    };
    return AccionCompra;
}(Accion));
// Clase derivada AccionEnvioMensaje
var AccionEnvioMensaje = /** @class */ (function (_super) {
    __extends(AccionEnvioMensaje, _super);
    function AccionEnvioMensaje(descripcion, fecha, destinatario, mensaje) {
        var _this = _super.call(this, descripcion, fecha) || this;
        _this.destinatario = destinatario;
        _this.mensaje = mensaje;
        return _this;
    }
    AccionEnvioMensaje.prototype.mostrarDetalle = function () {
        var mostrarInfo = _super.prototype.mostrarDetalle.call(this);
        return ("".concat(mostrarInfo, " \n        Destinatario: ").concat(this.destinatario, "\n        Mensaje: ").concat(this.mensaje));
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
    /**
     * Usa map cuando necesites transformar un array y obtener un nuevo array con los resultados.
     * Usa forEach cuando solo necesites ejecutar una función para cada elemento del array sin necesidad de un resultado acumulado.
     * @returns nuevo array
     */
    Historial.prototype.mostrarHistorial = function (id) {
        if (id) {
            this.acciones.forEach(function (accion) {
                if (accion.id === id) {
                    return console.log(accion.mostrarDetalle());
                }
            });
        }
        else {
            return console.log(this.acciones.map(function (accion) { return accion.mostrarDetalle(); }).join('\n'));
        }
    };
    return Historial;
}());
//Implementacion del Ejemplo de uso:
var historial = new Historial();
var cambios = [
    new Cambio(1, "correo@viejo.com", "correo@nuevo.com"),
    new Cambio(2, "1234", "5678")
];
// Crear acciones
var accion1 = new AccionInicioSesion("Usuario inició sesión", new Date(), "PC de Escritorio");
var accion2 = new AccionActualizacionPerfil("Usuario actualizó su perfil", new Date(), cambios);
var accion3 = new AccionCierreSesion("Usuario cerró sesión", new Date(), "PC de Escritorio", 30);
var accion4 = new AccionCompra("Usuario realizó una compra", new Date(), ["Laptop", "Ratón"], 1500);
var accion5 = new AccionEnvioMensaje("Usuario envió un mensaje", new Date(), "admin@example.com", "Hola, necesito ayuda con mi cuenta.");
// Agregar acciones al historial
historial.agregarAccion(accion1);
historial.agregarAccion(accion2);
historial.agregarAccion(accion3);
historial.agregarAccion(accion4);
historial.agregarAccion(accion5);
// Mostrar el historial
console.log("Historial de Acciones:");
historial.mostrarHistorial();
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
