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