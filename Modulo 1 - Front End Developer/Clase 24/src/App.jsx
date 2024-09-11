import React, { useState } from 'react'

function App() {

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

  let compartiendo = true
  let cargando_vista = false 
  let comparte = null //'Charly'

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
    console.log(contador);
    return(
      setContador(contador + 1)
    )
  }
  function decrementar() {
    console.log(contador);
    return(
      setContador(contador - 1)
    )
  }

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
      </div>
      <div>
      {
        !compartiendo 
        ? <div>Nadie Comparte</div>
          : ( cargando_vista
              ? <div>{`Comparte ${comparte}`}</div>
              : ( comparte === null
                ? <div>Nadie Comparte</div>
                : <div>cargando...</div>
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
    </>
  )
}

export default App
