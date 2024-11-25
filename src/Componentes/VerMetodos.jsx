import Table from 'react-bootstrap/Table'
import { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import PagosCard from './PagosCard';
export default function VerMetodos(){
    
    const [metodos, setMetodos] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [respuesta, setRespuesta] = useState('');
    const [respuestaError, setRespuestaError] = useState(false);

    useEffect(() => {
        traerMetodos();
    }, []);

    const traerMetodos = async () => {
        setCargando(true);
        try {
            const response = await axios.get('http://localhost:8000/metodoPagos');
            if (Array.isArray(response.data)) {
                setMetodos(response.data);
            } else {
                throw new Error('Datos inválidos');
            }
        } catch (error) {
            console.error('Error:', error);
            setRespuesta(`Error al obtener metodos: ${error.response?.data || error.message}`);
            setRespuestaError(true);
        } finally {
            setCargando(false);
        }
    };

    const handleRefresh = () => {
        setMetodos([]);
        setRespuesta('');
        setRespuestaError(false);
        traerMetodos();
    };


    return(

            <div className="container mt-5">
            {cargando ? (
            <div className="spinner-container-list">
                <Spinner animation="border" size="lg" />
            </div>
            ) : respuestaError ? (
                <div className="alert alert-danger">{respuesta}</div>
            ) : (
                <>
                    <h2>Metodos de pago</h2>
                    <div className="row m-5">
                    {metodos.map((metodo, index) => (
                        <PagosCard className="col-md-4 mb-4" key={index} metodo={metodo}></PagosCard>
                                 ))}
                    </div>
                    {!metodos.length && <p>No se encontraron Metodos.</p>}
                </>
            )}
            {respuesta && !respuestaError && (
                <p className="mt-3">Respuesta del servidor: {respuesta}</p>
            )}
            <Button variant="outline-secondary" className='refrescar m-3' onClick={handleRefresh} >
                Refrescar
            </Button>
        </div>
    )
}