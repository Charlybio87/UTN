// let num = 10 // Variable global
// {
//     let num = 20 // Variable local
//     console.log(num);
    
// }
// console.log(num);
// {
//     num = 30 // Reasigna a la variable global
//     console.log(num);
    
// }
// console.log(num);

// let nombre = 'flora'
// let apellido
// {
//     nombre = 'pepe'
//     let apellido = 'argento'
//     {
//         let nombre = 'juan'
//         apellido = 'suarez'
//         console.log(nombre);
//         console.log(apellido);
//     }
//     console.log(nombre);
//     console.log(apellido);
// }
// console.log(nombre);
// console.log(apellido);

let nombre = 'pepe'
console.log(nombre);
{
    let nombre = 'juan'
    console.log(nombre);
    {
        let nombre = 'maria'
        console.log(nombre);
    }
    console.log(nombre);
    {
        nombre = 'pedro'
        console.log(nombre)
        {
            nombre = 'ramon'
            console.log(nombre)
        }
        console.log(nombre)
    }
    nombre = 'messi'
    console.log(nombre)
}
nombre = 'julieta'
console.log(nombre);

