import React, { useRef, useState } from 'react';
import SingBackground from '../../assets/SingBackground.jpg'
import './Register.css';
import axios from 'axios';

function Register() {

    let 

    const [userName, setUserName] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [isErrorUserName, setIsErrorUserName] = useState(false);
    const [isErrorFullName, setIsErrorFullName] = useState(false);
    const [isErrorPassword, setIsErrorPassword] = useState(false);

    const inputUsername = useRef(null);
    const inputFullName = useRef(null);
    const inputPassword = useRef(null);

    const onSubmit = (event) => {
        event.preventDefault();
        setIsErrorUserName(!userName);
        setIsErrorFullName(!fullName);
        setIsErrorPassword(!password);

        if (userName && fullName && password) {
            console.log('Form submitted:', { userName, fullName, password });
        }
    };

    return (
        <>
            <div className="register-container">
                <div className="left-container">
                    <h1 className="form-label-tittle">REGISTRO</h1>
                    <form className="form-container" onSubmit={onSubmit}>
                        <label>Usuario</label>
                        <input
                            type="text"
                            name="userName"
                            placeholder="Ingrese usuario"
                            value={userName}
                            className={`form-control ${isErrorUserName ? 'error' : ''}`}
                            onChange={(event) => setUserName(event.target.value)}
                            ref={inputUsername}
                            autoFocus
                        />
                        {isErrorUserName && <label style={{ color: 'red' }}>Ingrese el nombre de usuario</label>}

                        <label className="form-label">Nombre Completo</label>
                        <input
                            type="text"
                            name="fullName"
                            className={`form-control ${isErrorFullName ? 'error' : ''}`}
                            placeholder="Ingrese su nombre completo"
                            value={fullName}
                            onChange={(event) => setFullName(event.target.value)}
                            ref={inputFullName}
                        />
                        {isErrorFullName && <label style={{ color: 'red' }}>Ingrese su nombre completo</label>}

                        <label className="form-label">Contraseña</label>
                        <input
                            name="password"
                            type="password"
                            className={`form-control ${isErrorPassword ? 'error' : ''}`}
                            placeholder="Ingrese su contraseña"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            ref={inputPassword}
                        />
                        {isErrorPassword && <label style={{ color: 'red' }}>Ingrese su contraseña</label>}

                        <button type="submit" className="send">Enviar</button>
                    </form>
                </div>
                <div className="right-container">
                    <img src={SingBackground} className="backgroundSingIn" />
                </div>
            </div>
        </>
    );
}

export default Register;