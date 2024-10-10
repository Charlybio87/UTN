import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const WorkspacesScreen = () => {
  const {workspace_id, channel_id} = useParams()// nos permite usarlo para buscarlos por su *_id
  const navigate = useNavigate()
  useEffect( () => {
    if (!channel_id) {
      navigate(`/workspace/${workspace_id}/${0}`)
    }
  }, [])

  const workspaces = [
    { id: 0, name: 'Workspace UTN', channel: [
      {
        id: 0,
        name: 'General',
        messages: [
          {
            id: 0,
            text: 'Hola a todos',
            user: 'Pepe',
            date: '2024-10-10'
          },
          {
            id: 1,
            text: 'Que tal!?',
            user: 'Juan',
            date: '2024-10-10'
          },
          {
            id: 2,
            text: 'No se que es Slack ',
            user: 'Juan',
            date: '2024-10-10'
          }
        ]
      },
      {
        id: 1,
        name: 'Consultas',
        messages: [
                    {
            id: 0,
            text: 'isNaN es una funcion rara o normal?',
            user: 'Pepe',
            date: '2024-10-10'
          },
          {
            id: 1,
            text: '😶',
            user: 'Juan',
            date: '2024-10-10'
          },
          {
            id: 2,
            text: 'isNaN es una funcion para saber si un valor es NAN, no se igual que es NaN',
            user: 'Juan',
            date: '2024-10-10'
          }
        ]
      }
    ] },
    { id: 1, name: 'Clase de Next.js', channel: [
      {
        id: 0,
        name: 'Novedades',
        messages: [
                    {
            id: 0,
            text: 'Hola a todos',
            user: 'Pepe',
            date: '2024-10-10'
          },
          {
            id: 1,
            text: 'Que tal!?',
            user: 'Juan',
            date: '2024-10-10'
          },
          {
            id: 2,
            text: 'No se que es Slack ',
            user: 'Juan',
            date: '2024-10-10'
          }
        ]
      },
      {
        id: 1,
        name: 'Tareas',
        messages: [
                    {
            id: 0,
            text: 'Hola a todos',
            user: 'Pepe',
            date: '2024-10-10'
          },
          {
            id: 1,
            text: 'Que tal!?',
            user: 'Juan',
            date: '2024-10-10'
          },
          {
            id: 2,
            text: 'No se que es Slack ',
            user: 'Juan',
            date: '2024-10-10'
          }
        ]
      }
    ] },
    { id: 2, name: 'Clase de piano', channel: [
      {
        id: 0,
        name: 'Clave sol',
        messages: [
                    {
            id: 0,
            text: 'Hola a todos',
            user: 'Pepe',
            date: '2024-10-10'
          },
          {
            id: 1,
            text: 'Que tal!?',
            user: 'Juan',
            date: '2024-10-10'
          },
          {
            id: 2,
            text: 'No se que es Slack ',
            user: 'Juan',
            date: '2024-10-10'
          }
        ]
      },
      {
        id: 1,
        name: 'Clave fa',
        messages: [
                    {
            id: 0,
            text: 'Hola a todos',
            user: 'Pepe',
            date: '2024-10-10'
          },
          {
            id: 1,
            text: 'Que tal!?',
            user: 'Juan',
            date: '2024-10-10'
          },
          {
            id: 2,
            text: 'No se que es Slack ',
            user: 'Juan',
            date: '2024-10-10'
          }
        ]
      }
    ] },
    { id: 3, name: 'juegos', channel: [
      {
        id: 0,
        name: 'tetris',
        messages: [
                    {
            id: 0,
            text: 'Hola a todos',
            user: 'Pepe',
            date: '2024-10-10'
          },
          {
            id: 1,
            text: 'Que tal!?',
            user: 'Juan',
            date: '2024-10-10'
          },
          {
            id: 2,
            text: 'No se que es Slack ',
            user: 'Juan',
            date: '2024-10-10'
          }
        ]
      },
      {
        id: 1,
        name: 'ajedrez',
        messages: [
                    {
            id: 0,
            text: 'Hola a todos',
            user: 'Pepe',
            date: '2024-10-10'
          },
          {
            id: 1,
            text: 'Que tal!?',
            user: 'Juan',
            date: '2024-10-10'
          },
          {
            id: 2,
            text: 'No se que es Slack ',
            user: 'Juan',
            date: '2024-10-10'
          }
        ]
      }
    ] },
  ]
  const workspace_seleccionado = workspaces.find(workspace => workspace.id === Number(workspace_id))
  
  const channel_seleccionado = workspace_seleccionado.channel.find(canal => canal.id === Number(channel_id))
  const [openNewChannelForm,setOpenNewChannelForm] = useState(false)
  const toggleNewChannelForm = () => {
    setOpenNewChannelForm(!openNewChannelForm)
  }
  return (
    <div>
      <h1>{workspace_seleccionado.name}</h1>
      <div>
        {workspace_seleccionado.channel.map(channel => {
          return (
            <Link key={channel.id} to={`/workspace/${workspace_id}/${channel.id}`}><br />{channel.name}</Link>
          )
        })
        }
      </div>
      {
        openNewChannelForm ?
        (
          <form>
            <div>
              <label htmlFor="new_channel_name">Nombre nuevo canal: </label>
              <input type="text" name="channel" id="new_channel_name" />
            </div>
            <div  style={{display: 'flex', flexDirection:'row',justifyContent:'center', gap:'5px'}}>
              <button type='submit'>Confirmar</button>
              <br />
              <button onClick={toggleNewChannelForm} type='button'>Cancelar</button>
            </div> 
            <br />
          </form>
        )
        : <button onClick={toggleNewChannelForm}>Crear Canal</button>
      }
      <div style={{display: 'flex', flexDirection:'column', alignItems:'center',gap:'10px'}}>
        {
          channel_seleccionado ? 
          channel_seleccionado.messages.map(message => {
              return (
                <div key={message.id}> 
                  <span><b>Fecha: {message.date}</b></span>
                  <p><b>{message.user} <i>dijo:</i></b> {message.text}</p>
                </div>
              )
            }) 
        : <h2>No has seleccionado ningun canal</h2>
      }
      </div>
    </div>
  )
}


export default WorkspacesScreen