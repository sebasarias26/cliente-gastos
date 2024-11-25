import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function FormularioCategoria() {
  return (
    <>
    <section className='formulario p-4 border rounded'>
      <Form.Floating >
        <Form.Control
          id="floatingInputCustom"
          type="text"
          placeholder="name"
        />
        <label htmlFor="floatingInputCustom">Nombre:</label>
      </Form.Floating>
      <Form.Floating >
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Archivo a subir: </Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      </Form.Floating>
      <Button variant="outline-secondary">Ingresar categoria</Button>{' '}
      </section>
    </>
  );
}

export default FormularioCategoria;