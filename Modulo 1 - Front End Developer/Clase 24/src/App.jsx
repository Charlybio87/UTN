import React, { useState } from 'react'
import { LoadingView, ErrorView } from './Components/status'
import './style/app.css'
import Carrito from './Components/counter'


export default function App() {

  // let navegador_abierto = true
  // let navegador_desplegado = null
  // if (navegador_abierto) {
  //   navegador_desplegado = <nav>
  //     <a href="#">Link1</a>
  //     <a href="#">Link2</a>
  //     <a href="#">Link3</a>
  //   </nav>
  // }

  //Operador Ternario
  let navegador_abierto = false
  let userRol = 'Premiun'
  
  let cargando = false
  let status = 'Error'

  // let compartiendo = true
  // let cargando_vista = true 
  // let comparte = 'Charly' //'Charly'
  const user = {
    name: 'Charly',
    aliasX: 'midudev',
    imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
    compartiendo: true,
    cargando_vista: true,
  }

  let estaRegistrando = false
  let inicioSeccion = true
  
  // let contador = 0
  // function incrementar() {
  //   return  (
  //     contador = contador + 1
  //   )
  // }

  const [contador, setContador] = useState(0)
  function incrementar () {
    //console.log(contador);
    return(
      setContador(contador + 1)
    )
  }
  function decrementar() {
    //console.log(contador);
    return(
      setContador(contador - 1)
    )
  }

  console.log(contador)
  
  return (
    <>
      <h1>Estados y Eventos</h1>
      <div>
        {/* {navegador_desplegado} */}
        {
          navegador_abierto 
            ? <nav>
                <a href="#">Link1</a>
                <a href="#">Link2</a>
                <a href="#">Link3</a>
              </nav> 
            : <h1>Cerrado</h1>
        }
        <h2>
          {
            userRol === 'Premiun'? 
            <span className={`premiun-card-${userRol}`}>Premiun</span> : <span className='free-card'>Free Trial</span>
          }
        </h2>
      </div>
      <div>
        {
          cargando
          ? <h2>Cargando...</h2>
          : (
              status === 'Finalizado'
              ? <h3>Todo Correcto</h3>
              : <h3>Error</h3>
            )
        }
        <hr />
      </div>
      <div>
      {
        !user.name 
        ? <div>Nadie Comparte.</div>
          : ( user.compartiendo === true 
              ? <LoadingView 
                nombre={user.name} 
                imagen={user.aliasX} 
                />
              : ( !user.cargando_vista
                ? <div>{user.name} no esta comparte vista.</div>
                : <ErrorView 
                  nombre={user.name} 
                  />
                )
            )
      }
      </div>
      <div>
        <hr />
        {
          !estaRegistrando && <a href="#">Registrarse</a>
        }
        <br />
        {
          inicioSeccion && <button>Cerrar Seccion</button>
        }
      </div>
      <div>
        <hr />
        <h2>Estados</h2>
        <button onClick={decrementar}>-</button>
        <span>{contador}</span>
        <button onClick={incrementar}>+</button>
      </div>
      <div>
        <Carrito/>
      </div>
    </>
  )
}

// function LoadingView(props) {
//   return(
//     <>
//       <img src={`${props.imagen}`} alt="imagenUser" />
//       <h2>Cargando vista de {props.nombre}</h2>
//     </>
//   )
// }
// const ErrorView = (props) => {
// 	return (
// 		<>
// 			<h2>Error al compartir vista {props.nombre}</h2>
// 			<span>Internal Server Error</span>
// 		</>
// 	)
// }
