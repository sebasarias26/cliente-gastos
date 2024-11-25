import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import metodoImg from '../assets/MetodoPago.png'

function PagosCard({metodo}) {
  return (
    <Card className='m-2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={metodoImg} />
      <Card.Body >
        <Card.Title>{metodo.nombreMetodo}</Card.Title>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>{metodo.valor}</ListGroup.Item>
            <ListGroup.Item>{metodo.descripcion}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default PagosCard;