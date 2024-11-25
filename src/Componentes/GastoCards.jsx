import './GastoCards.css';
import facturaimg from '../assets/facturaimg.png';

function GastoCards({ gasto }) {
  return (
    <section className="cards-section h-100 ">
      <div className="card-container ">
        <div className="info-container">
            <div className="img-container">
                <img src={facturaimg} className="imageAdding" />
            </div>
            <h1 className="gasto">{gasto.nombre}</h1>
            <hr />
            <p className="monto">{gasto.monto}</p>
            <hr />
            <p className="fecha">{gasto.fecha}</p>
            <hr />
            <p className="descripcion">{gasto.descripcion}</p>
        </div>
      </div>
    </section>
  );
}

export default GastoCards;


