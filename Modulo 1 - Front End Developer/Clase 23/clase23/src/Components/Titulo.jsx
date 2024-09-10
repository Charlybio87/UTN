import React from 'react'

const Titulo = (props) =>{
  console.log(props.text);
  
  return(
    <h1 title={props.descripcion}>Bienvenido {props.text}!!</h1>
  )
}
const SubTitulo = () =>{
  return(
    <h2>Soy un Subtitulo</h2>
  )
}
export function SubSubTitulo(){
  return(
  <div>
    <h3>Soy un SubSubtitulo</h3>
  </div>
  )
}

export {Titulo,SubTitulo} //importaciones normales
export default Titulo