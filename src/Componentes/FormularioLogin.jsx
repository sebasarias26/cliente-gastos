import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

function FormularioMetodosPago() {
  const [nombreMetodo, setNombreMetodo] = useState('')
  const [valorMetodo, setValorMetodo] = useState('')
  const [descripcionMetodo, setDescripcionMetodo] = useState('')
  const [cargando, setCargando] = useState(false)
  const [respuesta, setRespuesta] = useState('')
  const [respuestaError, setRespuestaError] = useState(false)

  async function EnviarDatos(event){
    event.preventDefault()
    setCargando(true)
    try{
      const response = await axios.post('http://localhost:8000/metodoPagos',{
        nombreMetodo: nombreMetodo,
        valor: valorMetodo,
        descripcion: descripcionMetodo 
      })
      setRespuesta('Metodo registrado!')
      setRespuestaError(false)
    }catch(error){
      setRespuesta(`Error al registrar el metodo: ${error.response?.data || error.message}`)
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
          id="floatingInputCustom"
          type="text"
          placeholder="name"
          value={nombreMetodo}
          onChange={(nombre)=>setNombreMetodo(nombre.target.value)}
        />
        <label htmlFor="floatingInputCustom">Nombre:</label>
      </Form.Floating>
      <Form.Floating >
        <Form.Control
          id="floatingInputCustom"
          type="number"
          placeholder="12345"
          value={valorMetodo}
          onChange={(valor)=>setValorMetodo(valor.target.value)}
        />
        <label htmlFor="floatingInputCustom">Valor:</label>
      </Form.Floating>
      <Form.Floating >
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripcion:</Form.Label>
        <Form.Control as="textarea" rows={3}
        value={descripcionMetodo}
        onChange={(descripcion)=>setDescripcionMetodo(descripcion.target.value)} />
      </Form.Group>
      </Form.Floating>
      <Button variant="outline-secondary" onClick={EnviarDatos}>Registrar</Button>{' '}
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
  );
}

export default FormularioMetodosPago;