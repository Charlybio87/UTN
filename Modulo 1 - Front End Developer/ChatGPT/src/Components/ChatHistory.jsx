import React from 'react'

const ChatHistory = (props) => {
  const chatHistoryJSX = props.data_mook.map((dia) =>{
    return(
        <div className='chatHistory' key={dia.id}>
          <span className='timestamp'>{dia.timestamp}</span>
          {
            dia.conversations.map((pregunta)=>{
              return(
                <div key={pregunta.id}>
                  <ul className='titulo'>{pregunta.titulo}</ul>
                  {
                    pregunta.chat.map((respuesta)=>{
                      return(
                        <div className='chat-respuesta' key={respuesta.id}>
                        <span>{respuesta.author}: </span>
                          {respuesta.text}
                      </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
    )    
  })
  return (
    <>
      <div>
      {chatHistoryJSX}
      </div>
    </>
  )
}

export default ChatHistory