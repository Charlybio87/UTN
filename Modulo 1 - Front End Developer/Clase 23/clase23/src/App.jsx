import React from 'react'
import SubscriptorCard from './Components/SubscriptorCard'

function App() {
return (
    <>
      <div className='caja-1'>
        <SubscriptorCard 
          nombre='Juan Pablo' 
          descripcion = 'Hola, estoy probando aun esta app!'
          fecha='15/02/2016'
          rol = 'premiun'
          />
        <SubscriptorCard 
          nombre='Maria Florencia' 
          descripcion = 'Me lo compartio un aimgo!'
          fecha='1/04/2017'
          rol = 'user'
          />
        <SubscriptorCard 
          nombre='Pedro' 
          descripcion = 'Se lo tome prestado a mi vieja!'
          fecha='25/05/2018'
          rol = 'admin'
          />
      </div>
    </>
  )
}

export default App