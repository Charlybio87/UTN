import React, { useState } from 'react'

const CreateWorkspace = () => {
  
  const [errorWorkspace, setErrorWorkspace] = useState({text: '', isError: false})
  const [errorChannel, setErrorChannel] = useState({text: '', isError: false})
  
  const handleSubmitForm = (evento) => {
    evento.preventDefault();
    const form = evento.target; // Obtener el elemento del formulario
    const name = form.name.value; // Obtener el valor del campo name
    const channel = form.channel.value;
    const workspace = { name, channel };

    if ( name !== '' && name.length >= 3) {  
      setErrorWorkspace ({text: '', isError: false})
    } else {
      (name === '') ? setErrorWorkspace ({text: 'Por favor, ingrese un nombre.', isError: true}) : setErrorWorkspace ({text: 'Debe tener al menos 3 caracteres.', isError: true})
    }  
    if (channel !== '' & channel.length >= 3 ) {
      setErrorChannel ({text: '', isError: false})  
    } else {
      (channel === '') ? setErrorChannel ({text: 'Por favor, ingrese un nombre.', isError: true}) : setErrorChannel ({text: 'Debe tener al menos 3 caracteres.', isError: true})
    }
    if (name !== '' && name.length >= 3 && channel !== '' && channel.length >= 3 ) {
      console.log(workspace)
    }
  }

  return (
    <>
    <h1>Crear Workspace</h1>
      <div>
        <form onSubmit={handleSubmitForm}>
          <div>
            <label>Nombre del Workspace</label>
            <br />
            <input name='name'/>
            {errorWorkspace.isError && <span>{errorWorkspace.text}</span>}
          </div>
          <div>
            <label>Nombre del Canal</label>
            <br />
            <input name='channel'/>
            {errorChannel.isError && <span>{errorChannel.text}</span>}
          </div>
          <button type='submit'>Crear</button>
        </form>
      </div>
    </>
  )
}

export default CreateWorkspace