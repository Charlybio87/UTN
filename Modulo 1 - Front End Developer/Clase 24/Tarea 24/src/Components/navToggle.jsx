import React, { useState } from 'react'

export function NavToggle() {
  // Variable de estado, sigue al menu si esta o no visible. (inicia con menu no visible = abrir)
  const [menuOpen,setMenu] = useState(false)
  
  function menu() { // Componente separado
    return(
      <ul>
        <ol>Option 1</ol>
        <ol>Option 2</ol>
        <ol>Option 3</ol>
        <ol>Option 4</ol>
        <ol>Option 5</ol>
        <ol>Option 6</ol>
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