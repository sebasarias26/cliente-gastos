/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner';
import GastoCards from './GastoCards';

export default function VerGastos() {
    const [gastos, setGastos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [respuesta, setRespuesta] = useState('');
    const [respuestaError, setRespuestaError] = useState(false);

    useEffect(() => {
        traerGastos();
    }, []);

    const traerGastos = async () => {
        setCargando(true);
        try {
            const response = await axios.get('http://localhost:8000/gastos');
            if (Array.isArray(response.data)) {
                setGastos(response.data);
            } else {
                throw new Error('Datos inválidos');
            }
        } catch (error) {
            console.error('Error:', error);
            setRespuesta(`Error al obtener gastos: ${error.response?.data || error.message}`);
            setRespuestaError(true);
        } finally {
            setCargando(false);
        }
    };

    const handleRefresh = () => {
        setGastos([]);
        setRespuesta('');
        setRespuestaError(false);
        traerGastos();
    };

    return (
        <div className="container mt-5">
            {cargando ? (
            <div className="spinner-container-list">
                <Spinner animation="border" size="lg" />
            </div>
            ) : respuestaError ? (
                <div className="alert alert-danger">{respuesta}</div>
            ) : (
                <>
                    <h2>Gastos</h2>
                    {gastos.map((gasto, index) => (
                       <GastoCards key={index} gasto ={gasto}></GastoCards>
                            ))}
                    {!gastos.length && <p>No se encontraron gastos.</p>}
                </>
            )}
            {respuesta && !respuestaError && (
                <p className="mt-3">Respuesta del servidor: {respuesta}</p>
            )}
            <Button variant="outline-secondary" className='refrescar'  onClick={handleRefresh} >
                Refrescar
            </Button>
        </div>
    );
}
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import GastoCards from './GastoCards';

export default function VerGastos() {
    const [gastos, setGastos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [respuesta, setRespuesta] = useState('');
    const [respuestaError, setRespuestaError] = useState(false);

    useEffect(() => {
        traerGastos();
    }, []);

    const traerGastos = async () => {
        setCargando(true);
        try {
            const response = await axios.get('http://localhost:8000/gastos');
            if (Array.isArray(response.data)) {
                setGastos(response.data);
            } else {
                throw new Error('Datos inválidos');
            }
        } catch (error) {
            console.error('Error:', error);
            setRespuesta(`Error al obtener gastos: ${error.response?.data || error.message}`);
            setRespuestaError(true);
        } finally {
            setCargando(false);
        }
    };

    const handleRefresh = () => {
        setGastos([]);
        setRespuesta('');
        setRespuestaError(false);
        traerGastos();
    };

    return (
        <div className="container mt-5">
            {cargando ? (
                <div className="spinner-container-list">
                    <Spinner animation="border" size="lg" />
                </div>
            ) : respuestaError ? (
                <div className="alert alert-danger">{respuesta}</div>
            ) : (
                <>
                    <h2>Gastos</h2>
                    <div className="row">
                        {gastos.map((gasto, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <GastoCards gasto={gasto} />
                            </div>
                        ))}
                    </div>
                    {!gastos.length && <p>No se encontraron gastos.</p>}
                </>
            )}
            {respuesta && !respuestaError && (
                <p className="mt-3">Respuesta del servidor: {respuesta}</p>
            )}
            <Button variant="outline-secondary" className='refrescar m-3' onClick={handleRefresh}>
                Refrescar
            </Button>
        </div>
    );
}
