import { useState } from 'react';
import Form 
from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './SingIn.css'

function SingIn () {

    const [name, setName] = useState ('');
    const [password, setPassword] = useState ('');
    const port = 8000

    Axios.post(`http://localhost:${port}/usuarios/login`)

    return (
        <>
            <h1 className='tittle'>INICIA SESIÓN CON NOSOTROS</h1>
            <p className="description">“Descubre mundos entre páginas: ¡Bienvenido a nuestra comunidad literaria!”</p>
            <div className="input-container">
                <input type="text" placeholder='Nombre' value={name} onChange={(event) => {setName (event.target.value)}}/>
                <input type="password" placeholder='Contraseña' value={password} onChange= {(event) => {setPassword (event.target.value)}}/>
                <button type='submit'>INICIAR</button>
            </div>
        </>
    )
}

export default SingIn;