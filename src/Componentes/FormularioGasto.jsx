import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

function FormularioGastos() {
  const [nombreGasto, setNombreGasto] = useState('')
  const [monto, setMonto] = useState('')
  const [fecha, setFecha] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [respuesta, setRespuesta] = useState('')
  const [respuestaError, setRespuestaError] = useState(false)
  const [cargando, setCargando] = useState(false)

  async function Enviar(event){
    event.preventDefault()
    setCargando(true)
    try{
    const response = await axios.post('http://localhost:8000/gastos',{
        nombre: nombreGasto,
        monto: monto,
        fecha: fecha,
        descripcion: descripcion
      })
      setRespuesta('Gasto registrado correctamente!')
      setRespuestaError(false)
    }catch (error){
      setRespuesta(`Error al registrar gasto: ${error.response?.data || error.message}`)
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
          value={nombreGasto}
          onChange={(nombreGasto) =>setNombreGasto(nombreGasto.target.value)}
        />
        <label htmlFor="floatingInputCustom">Nombre:</label>
      </Form.Floating>
      <Form.Floating >
        <Form.Control
          id="floatingInputCustom"
          type="number"
          placeholder="12345"
          value={monto}
          onChange={(monto) => setMonto(monto.target.value)}
        />
        <label htmlFor="floatingInputCustom">Monto:</label>
      </Form.Floating>
      <Form.Floating >
        <Form.Control
          id="floatingInputCustom"
          type="date"
          placeholder="dd/mm/yyyy"
          value={fecha}
          onChange={(fecha) => setFecha(fecha.target.value)}
        />
        <label htmlFor="floatingInputCustom">Fecha:</label>
      </Form.Floating>
      <Form.Floating >
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripcion:</Form.Label>
        <Form.Control as="textarea" rows={3}
        value={descripcion}
        onChange={(descripcion)=>setDescripcion(descripcion.target.value)} />
      </Form.Group>
      </Form.Floating>
      <Button variant="outline-secondary" onClick={Enviar}>Ingresar gasto</Button>{' '}
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

export default FormularioGastos