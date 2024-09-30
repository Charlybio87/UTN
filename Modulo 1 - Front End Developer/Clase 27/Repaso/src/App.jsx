import React from "react"
import ChannelList from "./Components/ChannelList/ChannelList"
import ChatList from "./Components/ChatList/ChatList"

function App() {

  const mensajes = 
  [
    {
      hour: '11:06 PM',
      author: 'Pepe suarez',
      text: 'Hola a todos!',
      id: 1
    },
    {
      hour: '11:05 AM',
      author: 'Martina Sanchez',
      text: 'Que tal?',
      id: 2
    },
    {
      hour: '11:17 AM',
      author: 'Juancito',
      text: 'Muy mal, no se nada de HTML para el examen',
      id: 3
    }
  ]

  const canales = [
    {
        id: 1,
        nombre: 'Consultas'
    },
    {
        id: 2,
        nombre: 'General'
    },
    {
        id: 3,
        nombre: 'Tareas'
    }
  ]
  
    return (
      <>
        <ChatList  mensajes={mensajes} titulos = {'Canales Mensajes'}/>
        <ChannelList canales={canales} titulos={'Canales Importantes'}/> 
        <ChannelList canales={canales} titulos={'Mensajes Directos'}/> 


        {/* llama a la funcion/componente (INNVOCA) */}
        {/*{canalesJSX}  llama a la variable que tiene el array (TRAE EL DATO DE DICHA VARIABLE) */}
      </>
    )
  }
  
  export default App