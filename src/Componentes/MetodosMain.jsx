import FormularioMetodosPago from "./FormularioLogin"
import VerMetodos from "./VerMetodos"
import Nav from 'react-bootstrap/Nav'
import { useState } from 'react'

export default function MetodosMain(){
    const [infoMain, setInfoMain] = useState('')
    const cambiarMain = (valor)=>{
        setInfoMain(valor)
    }
  return (
    <>
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="link-3" onClick={()=>cambiarMain('registro')}>Registrar metodo</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={()=>cambiarMain('ver')}>Ver metodos</Nav.Link>
      </Nav.Item>
    </Nav>
    {infoMain === 'registro' &&  <FormularioMetodosPago/>}
    {infoMain === 'ver' &&  <VerMetodos/>}
    </>
    )
}