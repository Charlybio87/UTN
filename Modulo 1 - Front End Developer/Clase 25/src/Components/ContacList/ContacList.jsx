import React from 'react'

export default function ContacList(props) {
  // const listaContactos = [
  //   {
  //     nombre: 'pepe',
  //     status: 'CONNECTED',
  //     iniciales: 'PS',
  //     id: 1
  //   },
  //   {
  //     nombre: 'Maria Gutierrez',
  //     status: 'DISCONNECTED',
  //     iniciales: 'MG',
  //     id: 2
  //   },
  //   {
  //     nombre: 'Juan Perez',
  //     status: 'CONNECTED',
  //     iniciales: 'JP',
  //     id: 3
  //   },
  //   {
  //     nombre: 'Carlos Ribas',
  //     status: 'DISCONNECTED',
  //     iniciales: 'DV',
  //     id: 4
  //   }
  // ]
  const listaContactosJSX = props.listaContactos.map((contacto)=>{
    let classNameConnectionStatusCircle= 'connection-status-circle' + 'connection-status-circle-'+ contacto.status.toLocaleLowerCase()
    return (
      <div key={contacto.id}>
        <div className='contacts-profile-picture'>
          <div>{contacto.iniciales}</div>
          <span className={classNameConnectionStatusCircle}></span>
          <div className='contacts-profile-name'>
            {contacto.nombre}
          </div>
        </div>
      </div>
    )
  })

  return (
    <>
    <div className="titulo">
      <h1>Lista de Contactos 2:</h1>
      <div className="contacts-list">
      <ul>{listaContactosJSX}</ul>
      </div>
    </div>
    </>
  )
}
