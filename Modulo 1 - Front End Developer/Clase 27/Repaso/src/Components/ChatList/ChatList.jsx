import React, { useState } from "react"
import ChatItem from "../ChatItem/ChatItem"

const ChatList=( { mensajes } )=>{
  const [error, setError] = useState({text: '', isError: false})
  const handleSubmitMessage = (evento) => {
    evento.preventDefault()
    const formulario = new FormData(evento.target)
    const mensaje = formulario.get('mensaje')
    // console.log(formulario.get('mensaje'));
    if(!mensaje){
      setError({text: 'El campo mensaje es requerido', isError: true})
    }else{
      setError({text: '', isError: false})
      const nuevoMensaje = {author: 'yo', text: mensaje, id: 5, hour:'20:22' }
      mensajes.push(nuevoMensaje)
    }
  }

  return (
    <div>
      <div className="mensajes">
        {
          mensajes.map((mensaje) => {
            return (
                <ChatItem key={mensaje.id} author={mensaje.author} text={mensaje.text}/>
            )
          })
        }
      </div>
        <form onSubmit={handleSubmitMessage}>
          <input placeholder="Escribir algo..." name="mensaje"/>
          {error.isError && <span>{error.text}</span>}
          <button type="submit">Enviar mensaje</button>
        </form>
    </div>
  )
}


export default ChatList

// const Chatlist=(props)=>{
//   const chatList = props.mensajes.map((mensaje) => {
//     return (
//       <div key={mensaje.id}>
//         <div>{mensaje.hour}</div>
//         <div >{mensaje.author}</div>
//         <div>{mensaje.text}</div>
//     </div>
//     )
//   })
//   return (
//     <div>
//       <h1>{props.titulos}</h1>
//       {chatList}
//     </div>
//   )
// }

// export default Chatlist

// const saludar = ({nombre, apellido}) => {
//   console.log(`Hola soy ${nombre} ${apellido}` )
// }

// saludar(props)
// saludar({nombre: 'pedro', apellido: 'suarez'})
// saludar({nombre:'juan', apellido:'suarez'})