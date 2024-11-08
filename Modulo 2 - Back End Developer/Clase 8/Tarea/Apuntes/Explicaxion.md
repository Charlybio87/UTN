1. Clase Accion
```ts
class Accion {
  id: number;
  descripcion: string;
  fecha: Date;

  constructor(id: number, descripcion: string, fecha: Date) {
    this.id = id;
    this.descripcion = descripcion;
    this.fecha = fecha;
  }

  mostrarDetalle(): void {
    console.log(`ID: ${this.id}, Descripcion: ${this.descripcion}, Fecha: ${this.fecha}`);
  }
}
```

Propiedades:

* id: Identificador único de la acción.
* descripcion: Descripción de la acción realizada.
* fecha: Fecha y hora en que se realizó la acción.
* Constructor: Inicializa las propiedades de la acción con los valores proporcionados.

Método mostrarDetalle: Imprime en la consola los detalles de la acción.

2. Clase Cambio
```jsx
class Cambio {
  id_cambio: number;
  valor_anterio: string;
  nuevo_valor: string;

  constructor(id_cambio: number, valor_anterio: string, nuevo_valor: string) {
    this.id_cambio = id_cambio;
    this.valor_anterio = valor_anterio;
    this.nuevo_valor = nuevo_valor;    
  }

  mostrarCambio(): void {
    console.log(`ID Cambio: ${this.id_cambio}, 
      Valor Anterior: ${this.valor_anterio},
      Nuevo Valor: ${this.nuevo_valor}`);
  }
}
```
Propiedades:

* id_cambio: Identificador único del cambio.
* valor_anterio: Valor antes del cambio.
* nuevo_valor: Valor después del cambio.

Método mostrarCambio: Imprime en la consola los detalles del cambio.

3. Clases derivadas de Accion

a. Clase AccionInicioSesion
```jsx
class AccionInicioSesion extends Accion {
  dispositivo_origen: string;

  constructor(id: number, descripcion: string, fecha: Date, dispositivo_origen: string) {
    super(id, descripcion, fecha);
    this.dispositivo_origen = dispositivo_origen;
  }

  mostrarDetalle(): void {
    super.mostrarDetalle();
    console.log(`Dispositivo Origen: ${this.dispositivo_origen}.`);
  }
}
```
Propiedades:

dispositivo_origen: Dispositivo desde el cual se inició sesión.
Método mostrarDetalle: Llama al método de la clase base y luego imprime el dispositivo desde el que se inició sesión.

b. Clase AccionCierreSesion
```jsx
class AccionCierreSesion extends Accion {
  dispositivo_origen: string;
  tiempo_de_sesion: number;

  constructor(id: number, descripcion: string, fecha: Date, dispositivo_origen: string, tiempo_de_sesion: number) {
    super(id, descripcion, fecha);
    this.dispositivo_origen = dispositivo_origen;
    this.tiempo_de_sesion = tiempo_de_sesion;
  }

  mostrarDetalle(): void {
    super.mostrarDetalle();
    console.log(`Dispositivo Origen: ${this.dispositivo_origen}, Tiempo de Sesion: ${this.tiempo_de_sesion} minutos.`);
  }
}
```
Propiedades:

dispositivo_origen: Dispositivo desde el cual se cerró sesión.
tiempo_de_sesion: Duración de la sesión en minutos.
Método mostrarDetalle: Llama al método de la clase base y luego imprime el dispositivo y el tiempo de sesión.

c. Clase AccionActualizacionPerfil
```jsx
class AccionActualizacionPerfil extends Accion {
  cambios: Cambio[];

  constructor(id: number, descripcion: string, fecha: Date, cambios: Cambio[]) {
    super(id, descripcion, fecha);
    this.cambios = cambios;
  }

  mostrarDetalle(): void {
    super.mostrarDetalle();
    console.log(`Cambios:`);
    this.cambios.forEach(cambio => cambio.mostrarCambio());
  }
}
```
Propiedades:

cambios: Array de objetos Cambio que representan los cambios realizados en el perfil.
Método mostrarDetalle: Llama al método de la clase base y luego imprime todos los cambios realizados.

d. Clase AccionCompra
```jsx
class AccionCompra extends Accion {
  productos: string[];
  total: number;

  constructor(id: number, descripcion: string, fecha: Date, productos: string[], total: number) {
    super(id, descripcion, fecha);
    this.productos = productos;
    this.total = total;
  }

  mostrarDetalle(): void {
    super.mostrarDetalle();
    console.log(`Productos: ${this.productos.join(', ')}, Total: $${this.total}`);
  }
}
```
Propiedades:

productos: Un array de cadenas que representa los productos comprados.
total: El monto total de la compra.
Método mostrarDetalle: Llama al método de la clase base para mostrar los detalles de la acción y luego imprime la lista de productos y el total de la compra.

e. Clase AccionEnvioMensaje
```jsx
class AccionEnvioMensaje extends Accion {
  destinatario: string;
  mensaje: string;

  constructor(id: number, descripcion: string, fecha: Date, destinatario: string, mensaje: string) {
    super(id, descripcion, fecha);
    this.destinatario = destinatario;
    this.mensaje = mensaje;
  }

  mostrarDetalle(): void {
    super.mostrarDetalle();
    console.log(`Destinatario: ${this.destinatario}, Mensaje: ${this.mensaje}`);
  }
}
```
Propiedades:

destinatario: El destinatario del mensaje enviado.
mensaje: El contenido del mensaje.
Método mostrarDetalle: Llama al método de la clase base y luego imprime el destinatario y el mensaje enviado.

4. Clase Historial
```jsx
class Historial {
  acciones: Accion[];

  constructor() {
    this.acciones = [];
  }

  agregarAccion(accion: Accion): void {
    this.acciones.push(accion);
  }

  eliminarAccionPorID(id: number): void {
    this.acciones = this.acciones.filter(accion => accion.id !== id);
  }

  eliminarTodo(): void {
    this.acciones = [];
  }

  mostrarHistorial(): void {
    this.acciones.forEach(accion => accion.mostrarDetalle());
  }
}
```
Propiedades:

acciones: Un array que almacena todas las instancias de Accion y sus derivadas.
Constructor: Inicializa el array acciones como vacío.

Método agregarAccion: Permite agregar una nueva acción al historial. Toma un objeto de tipo Accion como parámetro y lo añade al array acciones.

Método eliminarAccionPorID: Permite eliminar una acción del historial basándose en su id. Filtra el array acciones para excluir la acción con el id especificado.

Método eliminarTodo: Limpia el historial eliminando todas las acciones almacenadas en el array acciones.

Método mostrarHistorial: Itera sobre el array acciones y llama al método mostrarDetalle() de cada acción para imprimir sus detalles en la consola.

Resumen General
El código define un sistema de gestión de acciones, donde se pueden crear diferentes tipos de acciones (como inicio de sesión, cierre de sesión, actualizaciones de perfil, compras y envíos de mensajes), cada una con sus propias propiedades y métodos. La clase Historial actúa como un contenedor para estas acciones, permitiendo agregar, eliminar y mostrar el historial completo de acciones.

Este diseño permite una gran flexibilidad y escalabilidad, ya que se pueden agregar fácilmente nuevos tipos de acciones en el futuro simplemente extendiendo la clase Accion. Además, la encapsulación y la herencia se utilizan para organizar el código y mejorar su mantenibilidad.