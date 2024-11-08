¡Por supuesto! Aquí tienes un ejemplo en TypeScript que muestra cómo crear una clase base Accion y dos clases derivadas AccionCompra y AccionVenta. Cada clase derivada extiende la funcionalidad de la clase base.

```jsx
// Clase base
class Accion {
    protected nombre: string;
    protected precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }

    public mostrarInfo(): string {
        return `Acción: ${this.nombre}, Precio: ${this.precio}`;
    }
}

// Clase derivada para acciones de compra
class AccionCompra extends Accion {
    private cantidad: number;

    constructor(nombre: string, precio: number, cantidad: number) {
        super(nombre, precio);
        this.cantidad = cantidad;
    }

    public mostrarInfo(): string {
        return `${super.mostrarInfo()}, Cantidad: ${this.cantidad}`;
    }
}

// Clase derivada para acciones de venta
class AccionVenta extends Accion {
    private cantidad: number;

    constructor(nombre: string, precio: number, cantidad: number) {
        super(nombre, precio);
        this.cantidad = cantidad;
    }

    public mostrarInfo(): string {
        return `${super.mostrarInfo()}, Cantidad: ${this.cantidad}`;
    }
}

// Ejemplo de uso
const accionCompra = new AccionCompra("Empresa X", 100, 10);
const accionVenta = new AccionVenta("Empresa Y", 150, 5);

console.log(accionCompra.mostrarInfo());
console.log(accionVenta.mostrarInfo());
```


## Explicación:
* Clase Accion: Esta es la clase base que tiene dos propiedades (nombre y precio) y un método mostrarInfo que devuelve una cadena con la información de la acción.
* Clase AccionCompra: Esta clase hereda de Accion y añade una propiedad cantidad. También sobrescribe el método mostrarInfo para incluir la cantidad de acciones compradas.
* Clase AccionVenta: Similar a AccionCompra, esta clase también hereda de Accion y tiene su propia propiedad cantidad, con un método mostrarInfo que también muestra la cantidad de acciones vendidas.
* Ejemplo de uso: Se crean instancias de AccionCompra y AccionVenta, y se muestra la información de ambas utilizando el método mostrarInfo.

Este ejemplo ilustra cómo se puede utilizar la herencia en TypeScript para crear una jerarquía de clases que comparten funcionalidades comunes, al mismo tiempo que permiten especializaciones en las clases derivadas.


----

utilizando el ejemplo de una clase Historial que hereda de una clase base Registro.

## Clase Base
Primero, definimos la clase base Registro. Esta clase contendrá propiedades y métodos comunes que serán utilizados por las clases derivadas.
```jsx
class Registro {
    fecha: string;
    descripcion: string;

    constructor(fecha: string, descripcion: string) {
        this.fecha = fecha;
        this.descripcion = descripcion;
    }

    mostrarInfo(): string {
        return `Fecha: ${this.fecha}, Descripción: ${this.descripcion}`;
    }
}
```
## Clase Derivada
Luego, definimos la clase derivada Historial, que hereda de Registro. Esta clase puede tener propiedades adicionales y puede sobrescribir métodos de la clase base si es necesario.

```jsx
class Historial extends Registro {
    usuario: string;

    constructor(fecha: string, descripcion: string, usuario: string) {
        super(fecha, descripcion); // Llama al constructor de la clase base
        this.usuario = usuario;
    }

    mostrarInfo(): string {
        const baseInfo = super.mostrarInfo(); // Llama al método de la clase base
        return `${baseInfo}, Usuario: ${this.usuario}`;
    }
}

class Transaccion extends Registro {
    monto: number;

    constructor(fecha: string, descripcion: string, monto: number) {
        super(fecha, descripcion);
        this.monto = monto;
    }

    mostrarInfo(): string {
        const baseInfo = super.mostrarInfo();
        return `${baseInfo}, Monto: ${this.monto}`;
    }
}

class Evento extends Registro {
    lugar: string;

    constructor(fecha: string, descripcion: string, lugar: string) {
        super(fecha, descripcion);
        this.lugar = lugar;
    }

    mostrarInfo(): string {
        const baseInfo = super.mostrarInfo();
        return `${baseInfo}, Lugar: ${this.lugar}`;
    }
}
```
### Ejemplo de Uso
Ahora podemos crear instancias de estas clases y mostrar la información:
```jsx
const historial = new Historial("2023-10-01", "Inicio de sesión", "usuario1");
const transaccion = new Transaccion("2023-10-02", "Compra de producto", 150.75);
const evento = new Evento("2023-10-03", "Reunión de equipo", "Sala de conferencias");

console.log(historial.mostrarInfo());
console.log(transaccion.mostrarInfo());
console.log(evento.mostrarInfo());

Fecha: 2023-10-01, Descripción: Inicio de sesión, Usuario: usuario1
Fecha: 2023-10-02, Descripción: Compra de producto, Monto: 150.75
Fecha: 2023-10-03, Descripción: Reunión de equipo, Lugar: Sala de conferencias
```
### Resumen
Herencia: Historial, Transaccion, y Evento son clases derivadas de la clase base Registro. Esto significa que heredan sus propiedades y métodos.

Polimorfismo: Cada clase derivada puede sobrescribir el método mostrarInfo para proporcionar su propia implementación, permitiendo que cada tipo de registro se comporte de manera diferente.

Reutilización de Código: Al definir propiedades y métodos comunes en la clase base Registro, se evita la duplicación de código en las clases derivadas.

Este enfoque en TypeScript permite crear una estructura organizada y reutilizable, facilitando el mantenimiento y la extensión del código a medida que se añaden nuevos tipos de registros.