/*DOM: DOCUMENT OBJECT MODEL */ 
// Una representacion como OBJETO de nuestro HTML
// document: es una variable global que representa mi DOM, se crea cuando conecte mi script a HTML

// console.log(document) // Muestra registros normales por consola
// console.dir(document) // Muestra objeto: document

/*getElementById le pasamos un id y devuelve un elementoHTML (objeto) o si lo encuentra devuelve null*/

const titulo = document.getElementById('titulo')
console.dir(titulo)

/*elemento.innerText: Permite cambiar el titulo del texto interno */
console.log(titulo.innerText)

titulo.innerText = 'Lista de Productos'
console.log(titulo.innerText)

// guardamos en una variable: <div id="caja"></div>
const caja = document.getElementById('caja') 
console.log(caja)
// caja.innerHTML = '<button>Comprar</button>'
// caja.innerHTML(HTML interno de la caja) interpreta el string '<button>Comprar</button>' como si fuera HTMl

// const productos = ['tv samsung','celular TCL','Iphone 13','Teclado','Mate']

// productos.forEach( (producto) => caja.innerHTML = caja.innerHTML + '<h2>'+ producto +'</h2><button>Comprar</button> ')
// No es recomendable escribirlo asi ❌ 

/*Array de Objetos: Productos*/
const productos = [
    {
        nombre: 'Tv samsung',
        precio: 3000,
        id: 1,
        stock: 3,
        descripcion: 'lorem ipsum',
        thumbnail: 'https://tiendadiggit.com.ar/web/image/product.product/3637/image_128/%5BUN32T4300AGCZB%5D%20Smart%20TV%20Samsung%2032%22%20EQ%20HD%20%20%20%20%20%20%20%20?unique=ef593ca'
    },
    {
        nombre: 'Celular TCL',
        precio: 300,
        id: 2,
        stock: 30,
        descripcion: 'lorem ipsum',
        thumbnail: 'https://tiendadiggit.com.ar/web/image/product.product/3637/image_128/%5BUN32T4300AGCZB%5D%20Smart%20TV%20Samsung%2032%22%20EQ%20HD%20%20%20%20%20%20%20%20?unique=ef593ca'
    },
    {
        nombre: 'Iphone 13',
        precio: 1200,
        id: 3,
        stock: 6,
        descripcion: 'lorem ipsum',
        thumbnail: 'https://tiendadiggit.com.ar/web/image/product.product/3637/image_128/%5BUN32T4300AGCZB%5D%20Smart%20TV%20Samsung%2032%22%20EQ%20HD%20%20%20%20%20%20%20%20?unique=ef593ca'
    }
]

/*Inicialmente el innerHTML de caja es un '(vacio)'*/
// productos.forEach(producto => 
//     caja.innerHTML = caja.innerHTML +  `
//         <div class="producto">
//             <h2>${producto.nombre}</h2>
//             <img src="${producto.thumbnail}" alt="${producto.nombre}">
//             <br>
//             <span>Precio: $${producto.precio}</span>
//             <br>
//             <span>Stock Disponible: ${producto.stock}</span>
//             <br>
//             <button>comprar</button>
//             <hr>
//         </div>
//     `
// ) 
// La reasignacion del HTML genera un problema de rendimiento. En este caso hay 3 recargas del DOM

/*Optimizacion. Se arma una lista de string y se guarda (reasigna) una sola veces en caja.innerHTML */
let listaDeProductosHTML = ''

productos.forEach(producto => 
    listaDeProductosHTML = listaDeProductosHTML +  `
        <div class="producto">
            <h2>${producto.nombre}</h2>
            <img src="${producto.thumbnail}" alt="${producto.nombre}">
            <br>
            <span>Precio: $${producto.precio}</span>
            <br>
            <span>Stock Disponible: ${producto.stock}</span>
            <br>
            <button>comprar</button>
            <hr>
        </div>
    `
)

caja.innerHTML = listaDeProductosHTML


const usuarios = [
    {
        nombre: 'Pepe',
        id: 1,
    },
    {
        nombre: 'Maria',
        id: 2,
    },
    {
        nombre: 'Pedro',
        id: 3,
    }
]
/* querySelector(selector): Llama a un elemento por ID o CLASE*/

// const cajaProductos = document.querySelector('#caja')
// const cajaUsuarios = document.querySelector('.usuarios')


/*SessionStorage & LocalStorage*/
// Tema de la pagina
function cambiarTheme() {
    if (body.classList.contains('modo-claro')) {
        // Si la tiene, la removemos y agregamos la clase "mode-oscuro"
        body.classList.remove('modo-claro');
        body.classList.add('mode-oscuro');
        titulo.classList.add('mode-oscuro');
        caja.classList.add('mode-oscuro');
    } else {
        // Si no la tiene, removemos la clase "mode-oscuro" y agregamos la clase "modo-claro"
        body.classList.remove('mode-oscuro');
        body.classList.add('modo-claro');
        titulo.classList.remove('mode-oscuro');
        caja.classList.remove('mode-oscuro');
    }
}

let theme = localStorage.getItem('theme')
console.log(theme) // Null por no estar definido.
if(!theme){
    theme = prompt('Seleccione un tema:\n-claro\n-oscuro')
    /* Si quieren validan */
    localStorage.setItem('theme', theme)
}

const body = document.getElementById('body')
body.classList.add('mode-' + theme)// se llama a la lista de clases
const button = document.getElementById('button')
button.addEventListener('click', cambiarTheme);

/*Opcion de Cambio de modoIA */
// // Seleccionamos el botón y los elementos que queremos cambiar
// const button = document.getElementById('button');
// const body = document.getElementById('body');
// const titulo = document.getElementById('titulo');
// const caja = document.getElementById('caja');

// // Agregamos un evento de click al botón
// button.addEventListener('click', () => {
//   // Verificamos si el cuerpo tiene la clase "modo-claro"
// if (body.classList.contains('modo-claro')) {
//     // Si la tiene, la removemos y agregamos la clase "mode-oscuro"
//     body.classList.remove('modo-claro');
//     body.classList.add('mode-oscuro');
//     titulo.classList.add('mode-oscuro');
//     caja.classList.add('mode-oscuro');
// } else {
//     // Si no la tiene, removemos la clase "mode-oscuro" y agregamos la clase "modo-claro"
//     body.classList.remove('mode-oscuro');
//     body.classList.add('modo-claro');
//     titulo.classList.remove('mode-oscuro');
//     caja.classList.remove('mode-oscuro');
// }
// });