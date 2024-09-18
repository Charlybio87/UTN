import { useState } from 'react'
import Contactos from './Components/Contactos';
import ContacList from './Components/ContacList/ContacList';

function App() {
  const contactos = [
    {nombre:'pepe', id: 1},
    {nombre:'maria', id: 2},
    {nombre:'juan', id: 3},
    {nombre:'pedro', id: 4},
  ]

  const ListaContactosHTML = contactos.map(persona =>
    <ol key={persona.id}>
      <div>
        {persona.nombre}
    </div>
    </ol>
  )
  
  const listaContactos = [
    {
      nombre: 'pepe',
      status: 'CONNECTED',
      iniciales: 'PS',
      id: 1
    },
    {
      nombre: 'Maria Gutierrez',
      status: 'DISCONNECTED',
      iniciales: 'MG',
      id: 2
    },
    {
      nombre: 'Juan Perez',
      status: 'CONNECTED',
      iniciales: 'JP',
      id: 3
    },
    {
      nombre: 'Carlos Ribas',
      status: 'DISCONNECTED',
      iniciales: 'DV',
      id: 4
    }
  ]

  return (
    <>
      {/* <h1>Lista de Contactos:</h1>
      <ul>{ListaContactosHTML}</ul>
      <Contactos/> */}
      <h2>List React</h2>
      <ContacList listaContactos={listaContactos}/>
    </>
  );

}

export default App
