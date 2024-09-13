import React from 'react'


function LoadingView(props) {
  const imagenSrc = `https://unavatar.io/${props.imagen}`
  return(
    <>
      <img src={imagenSrc} alt="imagenUser" />
      <h2>Cargando vista de {props.nombre}</h2>
    </>
  )
}
const ErrorView = (props) => {
	return (
		<>
			<h2>Error al compartir vista {props.nombre}</h2>
			<span>Internal Server Error</span>
		</>
	)
}

export {LoadingView,ErrorView}