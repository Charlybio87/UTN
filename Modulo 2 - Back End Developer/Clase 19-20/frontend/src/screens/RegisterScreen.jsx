import React from 'react'
import useForm from '../hooks/useform'
import ENVIROMENT from '../utils/constants/enviroment'

const RegisterScreen = () => {
  const {form_state, handleChangeInput} = useForm({username:'', email:'', password: ''})
  const handleSubmitForm = async (event) =>{
      try{
          event.preventDefault()
          const response = await fetch(ENVIROMENT.API_URL + '/api/auth/register', {
              method: "POST",
              headers:{
                  'Content-Type': "application/json"
              },
              body: JSON.stringify(form_state)
          })
          const data = await response.json()
          console.log(data)
      }
      catch(error){
          console.error("Error al loguear", error)
      }
      
  }
  const errores = {
      email: [
      ],
      password: [
      ]
  }

  form_state.email && form_state.email.length > 30 && errores.email.push("El limite de caracteres es 30") 
  form_state.email && form_state.email.length < 5 && errores.email.push("El minimo de caracteres es 5")
  form_state.password && form_state.password.length < 5 && errores.password.push("El minimo de caracteres es 5")
  form_state.username && form_state.username.length < 3 && errores.password.push("El minimo de caracteres es 3")

  return (
      <div>
          <h1>Registro</h1>
          <form onSubmit={handleSubmitForm}>
            <div>
              <label htmlFor='username'>Ingresa tu nombre de usuario:</label>
              <input 
                  name='username' 
                  id='username' 
                  value={form_state.username} 
                  onChange={handleChangeInput}
              />
              {
                errores.username?.map((error, index) => <p key={index}>{error}</p>)
              }
            </div>
            <div>
                <label htmlFor='email'>Ingresa tu email:</label>
                <input 
                    name='email' 
                    id='email' 
                    placeholder='joedoe@email.com' 
                    value={form_state.email} 
                    onChange={handleChangeInput}
                />
                {
                    errores.email.map((error, index) => <p key={index} style={{color: 'red'}}>{error}</p>)
                }
            </div>
            <div>
                <label htmlFor='password'>Ingresa tu contraseña:</label>
                <input 
                    name='password' 
                    id='password' 
                    value={form_state.password} 
                    onChange={handleChangeInput}
                />
                {
                    errores.password.map((error, index) => <p style={{color: 'red'}} key={index}>{error}</p>)
                }
            </div>
            <button type='submit' disabled={
                errores.email.length || 
                errores.password.length || 
                !form_state.email || 
                !form_state.password
                }>
                Crear cuenta
            </button>
          </form>
      </div>
  )
}

export default RegisterScreen