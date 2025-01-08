import { useState } from "react"

const useForm = (form_initial_state) => {
  // form_initial_state = {email: '', password: ''}
  const [form_state, setFormState] = useState(form_initial_state)

  const handleChangeInput = (e) => {
    setFormState(
      (prev_form_state) => {
        const field_name = e.target.name
        const field_value = e.target.value

        return {
          ...prev_form_state,
          [field_name]: field_value
        }
      }
    )
  }
  return {
    form_state,
    handleChangeInput
  }
}

export default useForm