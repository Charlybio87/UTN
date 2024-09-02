/**
 * STORAGE
 */
// // Método ->  localStorage.setItem(clave, valor)
// // clave = nombre para identificar el elemento 
// // valor = valor/contenido del elemento 

// localStorage.setItem('bienvenida', '¡Hola Code!');
// localStorage.setItem('esValido', true);
// localStorage.setItem('unNumero', 20);

// // Método -> localStorage.getItem(clave)

// let mensaje =  localStorage.getItem('bienvenida');
// let bandera =  localStorage.getItem('esValido');
// let numero  =  localStorage.getItem('unNumero');

// console.log(mensaje);
// console.log(typeof mensaje); //string;
// console.log(bandera);
// console.log(typeof bandera); //string;
// console.log(numero);
// console.log(typeof numero);  //string;

// // Método ->  sessionStorage.setItem(clave, valor)
// // clave = nombre del elemento
// // valor = Contenido del elemento

// sessionStorage.setItem('seleccionados', [1,2,3]);
// sessionStorage.setItem('esValido', false);
// sessionStorage.setItem('email', 'info@email.com');

// // Método -> sessionStorage.getItem(clave)

// let lista   =  sessionStorage.getItem('seleccionados').split(",");
// let bandera1 = (sessionStorage.getItem('esValido') == 'true');
// let email   =  sessionStorage.getItem('email');

// console.log(lista);   //object ["1","2","3"];
// console.log(typeof lista);   //object ["1","2","3"];
// console.log(bandera1); //boolean;
// console.log(typeof bandera1); //boolean;
// console.log(email);   //string;
// console.log(typeof email);   //string;

// /* Acceso tipo objeto */
// //💢 No recomendado!
// //Guarda una clave
// localStorage.numeroPrueba = 5;

// //Leer una clave
// alert( localStorage.numeroPrueba ); // 5

// let clave = 'toString';	 //toString método reservado	
// localStorage[clave] = "6"; //No se guarda este dato

// /* Recorrer Storage */
// //Ciclo para recorrer las claves almacenadas en el objeto localStorage
// for (let i = 0; i < localStorage.length; i++) {
//     let clave = localStorage.key(i);
//     console.log("Clave: "+ clave);
//     console.log("Valor: "+ localStorage.getItem(clave));
// }
// /* Elimnar datos */

// localStorage.removeItem('bienvenida');
// sessionStorage.removeItem('esValido');
// localStorage.clear()    //elimina toda la información
// sessionStorage.clear() //elimina toda la información
/* Ejemplo */
// // Funciones
// const multiplicar  = (a, b) => a * b;
// const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

// // Solicitamos un valor al usuario
// let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// // En cada repetición calculamos el número ingresado por el número de repetición (i)
// for (let i = 1; i <= 10; i++) {
//     guardarLocal(i,multiplicar( parseInt(ingresarNumero),i))
// }
//

/**
 * JSON
 */

// const producto = { id: 2, producto: "Arroz" };
// localStorage.setItem("producto", producto); // Se guarda [object Object]

// // stringify

// const producto1 = { id: 2, producto: "Arroz" };
// const enJSON = JSON.stringify(producto1);

// console.log(enJSON); // {"id":2,"producto":"Arroz"}
// console.log(typeof producto1); // object
// console.log(typeof enJSON);    // string

// localStorage.setItem("producto1", enJSON);
// // Se guarda {"id":2,"producto":"Arroz"}

// // parse

// const enJSON    = '{"id":2,"producto":"Arroz"}';
// const producto1 = JSON.parse(enJSON);

// console.log(typeof enJSON);     // string
// console.log(typeof producto1);  // object
// console.log(producto1.producto); // Arroz

// const producto2 = JSON.parse(localStorage.getItem("producto1"));
// console.log(producto2.id);  // 2    

/* Ejemplo */
// const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
//     {  id: 2,  producto: "Fideo", precio: 70 },
//     {  id: 3,  producto: "Pan"  , precio: 50},
//     {  id: 4,  producto: "Flan" , precio: 100}];

// const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

// //Almacenar producto por producto
// for (const producto of productos) {
// guardarLocal(producto.id, JSON.stringify(producto));
// }
// // o almacenar array completo
// guardarLocal("listaProductos", JSON.stringify(productos));

// class Producto {
//     constructor(obj) {
//         this.nombre  = obj.producto.toUpperCase();
//         this.precio  = parseFloat(obj.precio);
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }
// }
// //Obtenemos el listado de productos almacenado
// const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
// const productos = [];
// //Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
// for (const objeto of almacenados)
//     productos.push(new Producto(objeto));
// //Ahora tenemos objetos productos y podemos usar sus métodos
// for (const producto of productos)
//     producto.sumaIva();

/**
 * DOM
 */

// Acceso por objeto document
// console.dir(document);
// console.dir(document.head)
// console.dir(document.body);

/* Acceder a los nodos */
// getElementById()
// let div     = document.getElementById("app");
// let parrafo = document.getElementById("parrafo1");
// console.log(div.innerHTML);
// console.log(parrafo.innerHTML);

// getElementsByClassName()
// let paises = document.getElementsByClassName("paises");
// console.log(paises[0].innerHTML);
// console.log(paises[1].innerHTML);
// console.log(paises[2].innerHTML);
// console.log(paises);
// console.log(paises[0]);
// console.log(paises[1]);
// console.log(paises[2]);

// getElementsByTagName()
// let contenedores = document.getElementsByTagName("div");
// console.log(contenedores);
// console.log(contenedores[0].innerHTML);
// console.log(contenedores[1].innerHTML);
// console.log(contenedores[2].innerHTML);
// console.log(contenedores[3].innerHTML);
// console.log(contenedores[4].innerHTML);

// For .. of
// let paises       = document.getElementsByClassName("paises");
// let contenedores = document.getElementsByTagName("div");

// for (const pais of paises) {
//     console.log(pais.innerHTML);
// }

// for (const div of contenedores) {
//     console.log(div.innerHTML);
// }

/* Creacion de Elementos */
// // Crear nodo de tipo Elemento, etiqueta p
// let parrafo = document.createElement("p");
// // Insertar HTML interno
// parrafo.innerHTML = "<h2>¡Hola Coder!</h2>"; 
// // Añadir el nodo Element como hijo de body
// document.body.appendChild(parrafo);

/* Eliminar Elementos */
// let parrafo = document.getElementById("parrafo1");
// //Elminando el propio elemento, referenciando al padre
// parrafo.parentNode.removeChild(parrafo);

// let paises = document.getElementsByClassName("paises");
// //Eliminando el primer elemento de clase paises
// paises[0].parentNode.removeChild(paises[0])

/* Obtener datos de Inputs */
// document.getElementById("nombre").value = "HOMERO";
// document.getElementById("edad").value   = 39;

//Obtenemos el nodo donde vamos a agregar los nuevos elementos
// let padre      = document.getElementById("personas");
// //Array con la información a agregar
// let personas   = ["HOMERO","MARGE", "BART", "LISA","MAGGIE"];
// //Iteramos el array con for...of
// for (const persona of personas) {
//     //Creamos un nodo <li> y agregamos al padre en cada ciclo
//     let li = document.createElement("li");
//     li.innerHTML = persona
//     padre.appendChild(li);
// }
// // Iteramo el array con forEach
// personas.forEach(element => {
//     let ol = document.createElement("ol")
//     ol.innerHTML = element
//     padre.appendChild(ol)
// });

/* Plantillas de text */
// Plantillas Literales
// let producto = { id: 1,  nombre: "Arroz", precio: 125 };
// let concatenado = "ID : " + producto.id +" - Producto: " + producto.nombre + "$ "+producto.precio;
// let plantilla   = `ID: ${producto.id} - Producto ${producto.nombre} $ ${producto.precio}`;
// //El valor es idéntico pero la construcción de la plantilla es màs sencilla
// console.log(concatenado);
// console.log(plantilla);

// Plantillas Literales e InnerHTML
// let producto   = { id: 1,  nombre: "Arroz", precio: 125 };
// let contenedor = document.createElement("div");
// //Definimos el innerHTML del elemento con una plantilla de texto
// contenedor.innerHTML = `
// <h3> ID: ${producto.id}</h3>
// <p>  Producto: ${producto.nombre}</p>
// <b> $ ${producto.precio}</b>
// `;
// //Agregamos el contenedor creado al body
// document.body.appendChild(contenedor);

/* Ejemplo Aplicado */
// const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
//     {  id: 2,  nombre: "Fideo", precio: 70 },
//     {  id: 3,  nombre: "Pan"  , precio: 50},
//     {  id: 4,  nombre: "Flan" , precio: 100}];

// for (const producto of productos) {
// let contenedor = document.createElement("div");
// //Definimos el innerHTML del elemento con una plantilla de texto
// contenedor.innerHTML = `
// <h3> ID: ${producto.id}</h3>
// <p>  Producto: ${producto.nombre}</p>
// <b> $ ${producto.precio}</b>`;
// document.body.appendChild(contenedor);
// }

/**
 * EVENTOS
 */

//respuesta 1
// let boton = document.getElementById("btnPrincipal")
//     boton.addEventListener("click", respuestaClick)
//     function respuestaClick(){
//     console.log("Respuesta evento");
//     }

//respuesta 2
// let boton = document.getElementById("btnPrincipal")
// boton.onclick = () =>{console.log("Respuesta 2")}

// function miFuncion() {
//     alert("¡Botón pulsado! ");
// }

/* Mouse */
let boton = document.getElementById("btnMain");
boton.onclick     = () => {console.log("Click")};
boton.onmousemove = () => {console.log("Move")}

/* Teclado */
// let input1  = document.getElementById("nombre");
// let input2  = document.getElementById("edad");
// input1.onkeyup   = () => {console.log("keyUp")};
// input2.onkeydown = () => {console.log("keyDown")};

/* Change */

let input1  = document.getElementById("nombre");
let input2  = document.getElementById("edad");
input1.onchange = () => {console.log("valor1")};
input2.onchange = () => {console.log("valor2")};

/* Submit */
let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");    
}