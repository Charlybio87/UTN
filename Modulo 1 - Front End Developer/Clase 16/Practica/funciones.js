function devolver(letra) {
    console.log(letra);
    
    if ((letra !== null || letra === '' || letra !== "no" || letra !== "no") && letra.length === 1 && isNaN(letra)) { 
        //condicion donde letra distinto a un Numero?
        console.log(letra);
        
        palabra.push(letra)
    } else if (letra === "no" || letra === "NO") {
        alert("Su es String es: " + palabra.join(''))
        a = false
    } else {
        alert('Ingrese una letra!')
    }
    console.log(a);
    
    return a
}