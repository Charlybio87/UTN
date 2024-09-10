import React from 'react'

export default function SuscriptorCard(props) {
  return (
    <div className={`subscriptor-card subscriptor-card-${props.rol}`}>
      <h3>{props.nombre}</h3>
      <p>{props.descripcion}</p>
      <span><b>Fecha:</b> {props.fecha}</span>
      <div>(<strong>{props.rol}</strong>)</div> 
      <hr/>

    </div>
  )
}
