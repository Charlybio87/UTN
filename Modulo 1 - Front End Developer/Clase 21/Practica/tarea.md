# Crear una funcion que se llame quitarProductoDelCarrito que recibira el array de carrito y el id del producto a decrementar y devolvera un nuevo array con la estructura original del carrito, pero el producto que su id sea igual al id recibido tendra su cantidad decrementada en 1

> EJEMPLO:
```js
const carrito = [
    {
        productoId: 1,
        cantidad: 2
    },
    {
        productoId: 2,
        cantidad: 4
    },
    {
        productoId: 3,
        cantidad: 90
    }
]
```

> EJEMPLO DE LLAMADA A LA FUNCION
> quitarProductoDelCarrito(carrito, 2) esta funcion devolvera:

```js
[
    {
        productoId: 1,
        cantidad: 2
    },
    {
        productoId: 2,
        cantidad: 3
    },
    {
        productoId: 3,
        cantidad: 90
    }
]
```