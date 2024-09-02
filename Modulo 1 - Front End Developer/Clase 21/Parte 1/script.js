
const nombres = ['pepe','carlos','juan']

const nombresHTML = nombres.map(
    (nombre) => {
        return `<div>Nombre: ${nombre}</div>`
    }
)
console.log(nombresHTML);

const personas = [
    {
        nombre: 'pepe',
        edad: 25

    },
    {
        nombre: 'carlos',
        edad: 30
    },
    {
        nombre: 'juan',
        edad: 35
    }
]

const personasObj = personas.map(
    (persona) => {
        return {nombre: persona.nombre}
    }
)
console.log(personas[0].nombre);
console.log(personasObj);


const carrito = [
    {
        id: 1,
        cantidad: 2
    },
    {
        id: 2,
        cantidad: 4
    },
    {
        id: 3,
        cantidad: 90
    },
]

const carritoMod = carrito.map(
    (producto) => {
        if (producto.id === 3) {
            producto.cantidad--
        }
    return producto
    }
)
console.log(carritoMod);
