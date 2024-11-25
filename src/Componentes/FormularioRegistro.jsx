import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'

function FormularioRegistro() {
  const [nombre, setNombreusuario] = useState('')
  const [edad, setEdad] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [fechaRegistro, setFecha] = useState('')
  const [contraseña, setPassword] = useState('')
  const [respuesta, setRespuesta] = useState('')
  const [respuestaError, setRespuestaError] = useState(false)
  const [cargando, setCargando] = useState(false)

  async function handleSubmit(event) {
  event.preventDefault()
  setCargando(true)
  try {
    const response = await axios.post('http://localhost:8000/usuarios', {
      nombre: nombre,
      edad: edad,
      correo: correo,
      telefono: telefono,
      ciudad: ciudad,
      fechaRegistro: fechaRegistro,
      contraseña: contraseña
    })
    console.log('Datos enviados con éxito:', response.data)
    setRespuesta('Registro éxitoso!')
    setRespuestaError(false); 
  } catch (error) {
    console.error('Error al enviar datos:', error.response?.data || error.message)
    setRespuesta(`Error al enviar datos: ${error.response?.data || error.message}`)
    setRespuestaError(true)
  }finally{
    setCargando(false)
  }
}

  return (
    <>
    <div className="container my-5">
    <section className='formulario p-4 border rounded'>
      <Form.Floating >
        <Form.Control
          type="text"
          placeholder="name"
          value={nombre}
          onChange={(nombreusuario)=>setNombreusuario(nombreusuario.target.value)}
        />
        <label htmlFor="floatingInputCustom">Nombre completo:</label>
      </Form.Floating>
      <Form.Floating >
        <Form.Control
          type="number"
          placeholder="12345"
          value={edad}
          onChange={(edad)=>setEdad(edad.target.value)}
        />
        <label htmlFor="floatingInputCustom">Edad:</label>
      </Form.Floating>
      <Form.Floating >
        <Form.Control
          type="email"
          placeholder="name@example.com"
          value={correo}
          onChange={(correo)=>setCorreo(correo.target.value)}
        />
        <label htmlFor="floatingInputCustom">Correo electronico:</label>
      </Form.Floating>
      <Form.Floating >
        <Form.Control
          type="number"
          placeholder="name@example.com"
          value={telefono}
          onChange={(telefono)=>setTelefono(telefono.target.value)}
        />
        <label htmlFor="floatingInputCustom">Numero de contacto:</label>
      </Form.Floating>
      <Form.Floating >
        <Form.Control
          type="text"
          placeholder="name"
          value={ciudad}
          onChange={(ciudad)=>setCiudad(ciudad.target.value)}
        />
        <label htmlFor="floatingInputCustom">Ciudad:</label>
      </Form.Floating>
      <Form.Floating >
        <Form.Control
          id="floatingInputCustom"
          type="date"
          placeholder="dd/mm/yyyy"
          value={fechaRegistro}
          onChange={(fecha)=>setFecha(new Date(fecha.target.value))}
        />
        <label htmlFor="floatingInputCustom">Fecha de inscripcion:</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          type="password"
          placeholder="Password:"
          value={contraseña}
          onChange={(password)=>setPassword(password.target.value)}
        />
        <label htmlFor="floatingPasswordCustom">Contraseña:</label>
      </Form.Floating>
      <Button variant="outline-secondary" onClick={handleSubmit}>Registrarse</Button>{' '}
      {cargando ? (
            <div className="spinner-container">
                <Spinner animation="border" size="lg" />
            </div>
            ):(<>
      {respuesta && (
          <p className={`respuestaServer ${respuestaError ? 'error' : 'success'}`}>
            {respuesta}
          </p>
        )}</>
      )}
      </section>
      </div>
    </>
  )
}

export default FormularioRegistro