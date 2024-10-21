// console.log('Hola');
// Array
var nombres = ['pepe', 'juan', 'maria'];
// nombres.push(1)
var mesesQueGane = [true, false, true, true];
var array = ['pepe', 10];
console.log(array[0]);
console.log(array[1]);
var product = {
    precio: 10.99,
    id: 1,
    nombre: 'pepe'
};
/*tipado explicito */
// const product : {precio:number,id:number,nombre:string}={
//   precio: 110,
//   id:1,
//   nombre: 'tv samsung'
// }
/*tipado literal */
// const mostrarProducto = (producto : {precio:number,id:number,nombre:string}): void  =>{
//   document.write(`
//     <div>
//       <h2>${producto.nombre}</h2>
//       <p>Precio: ${producto.precio}</p>
//       <p>ID: ${producto.id}</p>
//     </div>
//     `)
// }
// const mostrarProducto = (producto: { precio: number; id: number; nombre: string }): void => {
//   const container = document.createElement('div');
//   container.innerHTML = `
//     <div>
//       <h2>${product.nombre}</h2>
//       <p>Precio: ${product.precio.toFixed(2)} €</p>
//       <p>ID: ${product.id}</p>
//     </div>
//   `;
//   document.body.appendChild(container);
// }
// mostrarProducto(product)
var mostrarProductos = function (productos) {
    for (var _i = 0, productos_1 = productos; _i < productos_1.length; _i++) {
        var producto = productos_1[_i];
        document.write("\n    <div>\n      <h2>".concat(producto.nombre, "</h2>\n      <p>Precio: ").concat(producto.precio, "</p>\n      <p>ID: ").concat(producto.id, "</p>\n    </div>\n    "));
    }
};
mostrarProductos([product, product]);
/*Metodos Avanzados de array */
var product_2 = {
    precio: 300,
    id: 1,
    nombre: 'tv sony'
};
var product_3 = {
    precio: 400,
    id: 2,
    nombre: 'tv samsung'
};
var productos = [
    product,
    product_2,
    product_3
];
// Crear una funcion que se llame buscarProducroPorId(product_id) y devuelva el producto encontrado o null en caso de no encontrar
// const buscarProductoPorId = (productos: Product[], product_id: number): Product | null => {
//   for (let producto of productos) {
//     if (producto.id === product_id) {
//       return producto; // Retorna el producto encontrado
//     }
//   }
//   return null; // Retorna null si no se encuentra
// }
// // Ejemplo de uso
// const productIdToFind = 1; // Cambia este valor para buscar diferentes productos
// const foundProduct = buscarProductoPorId(productos, productIdToFind);
// if (foundProduct) {
//   console.log(`producto encontrado: ${foundProduct.nombre}`);
// } else {
//   console.log('Producto no encontrado');
// }
var buscarProductoPorId = function (product_id, productos) {
    var result = productos.find(function (product) {
        return product.id === product_id;
    });
    return result || null;
    // return result ? result : null;
    //if(result){
    //return result
    //}
    //return null
};
var productIdToFind = 0; // Cambia este valor para buscar diferentes productos
var foundProduct = buscarProductoPorId(productIdToFind, productos);
if (foundProduct) {
    console.log("Producto encontrado: ".concat(foundProduct.nombre));
}
else {
    console.log('Producto no encontrado');
}
