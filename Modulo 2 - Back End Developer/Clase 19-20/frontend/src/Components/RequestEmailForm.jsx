const RequestEmailForm = () => {
  const resendVerifyEmail = async (email) => {
    try {
      const response = await fetch('/api/auth/resend-verify-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
  
      if (!response.ok) {
        throw new Error('Error al reenviar el correo de verificación');
      }
  
      // Manejar el éxito (por ejemplo, mostrar un mensaje de éxito)
    } catch (error) {
      // Redirigir a la pantalla de error con el tipo de error específico
      window.location.href = `/error?error=RESEND_EMAIL_VERIFY_TOKEN`;
    }
  }
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    resendVerifyEmail(email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Ingresa tu correo"
        required
      />
      <button type="submit">Reenviar Correo de Verificación</button>
    </form>
  )
}

export default RequestEmailForm