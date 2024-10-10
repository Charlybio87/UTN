import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HomeScreen() {
  // const nombreUsuario = 'pepe'
  const [nombreUsuario, setNombreUsuario] = useState('pepe')
  const handleChangeInputName = (e)=>{
    // console.log('Cambio detectado');
    // console.log(e.target.value)
    setNombreUsuario(e.target.value)
  }
  // console.log('me cague');
  const workspaces = [
    { id: 0, 
      name: 'Workspace UTN', 
      channel: [
      {
        id: 0,
        name: 'General',
        messages: []
      },
      {
        id: 1,
        name: 'Development',
        messages: []
      }
    ] },
    { id: 1, name: 'Clase de Next.js' },
    { id: 2, name: 'Clase de piano' },
    { id: 3, name: 'juegos' },
  ]
  
  /**
   * si el usuario escribe en el input workspaes_name existentes 
   */

  const [nombreWorkspace,setNombreWorkspace] = useState('')

  const handleChangeWorkspaceName = (e) => {
  setNombreWorkspace(e.target.value)
  }

  const isInUseWorkspaceName = (nombreWorkspace,workspaces) => {
    // let resultado = workspaces.filter(workspace => workspace.name === nombreWorkspace) return resultado.length > 0
    // let workspaces_buscados =  workspaces.find(workspace => workspace.name === nombreWorkspace) retunr Boolean (workspaces_buscados)// devuelve un objeto
    return workspaces.some(workspace => workspace.name === nombreWorkspace)// devuelve un booleano al ver el array
  }
  // console.log(isInUseWorkspaceName('Worspaces UTN', workspaces))
  const [errorWorkspacespaceRepeated,setErrorWorkspacespaceRepeated] = useState(false)

  useEffect(
    () => {
      setErrorWorkspacespaceRepeated(isInUseWorkspaceName(nombreWorkspace,workspaces))
    },
    [nombreWorkspace]
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isInUseWorkspaceName(nombreWorkspace, workspaces)) {
      alert('El nombre de workspace ya existe')
    } else {
      workspaces.push({ id: workspaces.length + 1, name: nombreWorkspace })
      setNombreWorkspace('')
    }
  }
  return (
    <>
      <h1>Afip</h1>
      <h2>Bienvenidos {nombreUsuario}</h2>
      <form>
        <label htmlFor="nombre">Ingrese nombre: </label>
        <input id='nombre' name='nombre' value={nombreUsuario} onChange={handleChangeInputName}/>
      </form>
      <form>
        <h2>Crear espacio de trabajo</h2>
        <div>
          <label htmlFor="workspaece_name">Ingrese el nombre del espacio: </label>
          <input 
            placeholder='EJ: Workspace 1' 
            id='workspace_name' 
            name='workspace_name'
            value={nombreWorkspace} 
            onChange={handleChangeWorkspaceName}
          />
          {
            errorWorkspacespaceRepeated 
            ? <span><br />Nombre en uso</span>
            : (
              nombreWorkspace.length > 0 
              ? <span><br />Nombre Disponible</span>
              : null
            )
            // errorWorkspacespaceRepeated && 
            // <span><br />Nombre en uso</span>
          }
          <br />
          <button type='submit' onClick={handleSubmit}>Crear espacio</button>
        </div>
        <div>
          {workspaces.map(workspace => {
            return (
              <Link key={workspace.id} to={`/workspace/${workspace.id}/0`}>
                <h2>{workspace.name}</h2>
              </Link>
            )
          })}
        </div>
      </form>
    </>
  )
}

export default HomeScreen