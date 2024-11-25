import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import FormularioRegistro from './FormularioRegistro';
import FormularioGastos from './FormularioGasto';
import VerGastos from './VerGastos';


function GastosMain() {
    const [infoMain, setInfoMain] = useState('')
    const cambiarMain = (valor)=>{
        setInfoMain(valor)
    }
  return (
    <>
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="link-3" onClick={()=>cambiarMain('registro')}>Registrar gasto</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={()=>cambiarMain('ver')}>Ver gastos</Nav.Link>
      </Nav.Item>
    </Nav>
    {infoMain === 'registro' &&  <FormularioGastos/>}
    {infoMain === 'ver' &&  <VerGastos/>}

    </>
  );
}

export default GastosMain;