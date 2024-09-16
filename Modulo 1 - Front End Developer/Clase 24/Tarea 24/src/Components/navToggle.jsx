import React, { useState } from 'react'

export function NavToggle() {
  // Variable de estado, sigue al menu si esta o no visible. (inicia con menu no visible = abrir)
  const [menuOpen,setMenu] = useState(false)
  
  function menu() { // Componente separado
    return(
      <ul>
        <ol><a href="#">Option 1</a></ol>
        <ol><a href="#">Option 2</a></ol>
        <ol><a href="#">Option 3</a></ol>
        <ol><a href="#">Option 4</a></ol>
        <ol><a href="#">Option 5</a></ol>
        <ol><a href="#">Option 6</a></ol>
      </ul>
    )
  }

  const menuClick = () => { // Actualizacion del estado menuOpen (true/false)
    setMenu(!menuOpen)
  }
  
  const opcion = !menuOpen ? // Variable opcion depende del estado actual
  'Abrir' : 'Cerrar'

  return (
    <>
      {/* Se crea un botón que cambia el estado por c/click. Cuando se actualiza el estado menuOpen, y el menú se renderiza condicionalmente. */}
      <button onClick={menuClick}>
        {opcion}
      </button>
      {menuOpen && menu()}
      {/* <div>
          <button onClick={() => setMenu(!menuOpen)}>{opcion}</button>
          {menuOpen && <Menu />}
          </div> 
      */}
    </>
  )
}