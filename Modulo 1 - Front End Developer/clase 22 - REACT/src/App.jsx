import React from 'react'

function App() {
  const saludar = () =>{
  alert('Saludo')
  }
  return (
    <div>
      <Titulo/>
      <input type="button" value="CLICK"/>
      <button onClick={saludar}>Hola</button>
    </div>
  )
}

const Titulo = () => {
  let nombre = prompt('Ingrese un nombre: ')
  return (
    <h1>Soy unbot{nombre}</h1>
  )
}


export default App
