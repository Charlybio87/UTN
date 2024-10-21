// console.log('Hola');

// Array

const nombres:string[] = ['pepe','juan','maria']
// nombres.push(1)
const mesesQueGane:boolean[] = [true,false,true,true]

const array: [string,number] = ['pepe',10]
console.log(array[0])
console.log(array[1])

/*Interfaces, establece que es un product en mi aplicaion */
interface Product {
  precio: number,
  id: number,
  nombre:string
}
const product: Product ={
  precio:10.99,
  id:1,
  nombre:'pepe'
}

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

const mostrarProductos = (productos: Product[] ): void => {
  for (let producto of productos) {
  document.write(`
    <div>
      <h2>${producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <p>ID: ${producto.id}</p>
    </div>
    `)
  }
}
mostrarProductos([product,product])


/*Metodos Avanzados de array */

const product_2: Product= {
  precio:300,
  id:1,
  nombre: 'tv sony'
}
const product_3 :Product ={
  precio: 400,
  id: 2,
  nombre: 'tv samsung'
}
const productos = [
  product,
  product_2,
  product_3
]

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

const buscarProductoPorId = (product_id: number, productos: Product[]) : Product | null => {
    
  const result : Product | undefined = productos.find(
    (product : Product) : boolean => {
      return product.id === product_id
    }
  )
  return result || null
  // return result ? result : null;
  //if(result){
  //return result
  //}
  //return null
}
const productIdToFind = 0; // Cambia este valor para buscar diferentes productos
const foundProduct = buscarProductoPorId(productIdToFind, productos);

if (foundProduct) {
  console.log(`Producto encontrado: ${foundProduct.nombre}`);
} else {
  console.log('Producto no encontrado');
}

/* */