import React from 'react'
import RequestEmailForm from '../Components/RequestEmailForm'

const ErrorScreen = () => {
  const url = new URLSearchParams(window.location.search)//obtenemos los parametros de la url
  const error = url.get('error')
  const ERRORS = {
    'RESEND_VERIFY_TOKEN':{
      title: 'Error al enviar el token de verificación',
      message: 'Hubo un error al enviar el token de verificación, por favor intenta de nuevo...',
      Component: null
    },
    'REQUEST_EMAIL_VERIFY_TOKEN':{
      title: 'No se pudo verificar tu cuenta',
      message: 'Por favor intenta de nuevo ingresar tu mail para enviarte el correo de verificacion.',
      Component: RequestEmailForm
    },
    'RESEND_EMAIL_VERIFY_TOKEN': {
      title: 'Error al reenviar el correo de verificación',
      message: 'Hubo un error al reenviar el correo de verificación, por favor intenta de nuevo...',
      Component: RequestEmailForm
    }, 
    'DEFAULT':{
      title: 'Error',
      message: 'Hubo un error, por favor intenta de nuevo...',
      Component: null
    }
  }
  
  const {title,message,Component} = ERRORS[error] ? ERRORS[error] : ERRORS['DEFAULT']

  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
      {Component && <Component/>}
    </div>
  )
}

export default ErrorScreen


//FRONTEND: Conectar el endpoint POST /api/auth/resend-verify-email con la pantalla de /error?error=RESEND_EMAIL_VERIFY_TOKEN?