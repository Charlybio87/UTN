//Class empleado
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
/*
nombre: string
sueldo: number
fecha_contratacion: date
id_empeado: number
puesto: string
 */
var Empleado = /** @class */ (function () {
    function Empleado(nombre, sueldo, fecha_contratacion, id_empleado, puesto) {
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.fecha_contratacion = fecha_contratacion;
        this.id_empleado = id_empleado;
        this.puesto = puesto;
    }
    return Empleado;
}());
var Casa = /** @class */ (function () {
    function Casa(direccion, id, propietario, fecha_creacion) {
        this.direccion = direccion;
        this.id = id;
        this.propietario = propietario;
        this.fecha_creacion = fecha_creacion;
    }
    return Casa;
}());
// Pasante
/*
tiempo_pasantia_meses:
recomentado_por:
 */
var Pasante = /** @class */ (function (_super) {
    __extends(Pasante, _super);
    function Pasante(nombre, sueldo, fecha_contratacion, id_empleado, puesto, tiempo_pasantia_meses, recomendado_por) {
        var _this = _super.call(this, nombre, sueldo, fecha_contratacion, id_empleado, puesto) || this;
        _this.tiempo_pasantia_meses = tiempo_pasantia_meses;
        _this.recomendado_por = recomendado_por;
        return _this;
    }
    Pasante.prototype.presentarse = function () {
        console.log("Hola, me llamo ".concat(this.nombre, " y soy ").concat(this.puesto, ".\nMe contrataron el ").concat(this.fecha_contratacion, " y estoy trabajando desde hace ").concat(this.tiempo_pasantia_meses, " meses. \nMe recomendaron de ").concat(this.recomendado_por, "."));
    };
    return Pasante;
}(Empleado));
var pepe = new Pasante('pepe', 900, new Date, 1, 'DEV', 4, 'NIT');
pepe.presentarse();
