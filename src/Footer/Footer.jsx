import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import Logo from '../Banner/img/logo.png'; 
import './Footer.css';
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Información Empresarial</h5>
            <p>Sebastian Poveda Arias</p>
            <p>Jose Manuel Henao Rodriguez</p>
            <p>Simon Mesa Montoya</p>
            <p>Adrian Barrera Garcia</p>
          </Col>
          <Col md={4}>
            <h5>Información de Contacto</h5>
            <p>spovedar@cesde.net</p>
            <p>jmhenaoro@cesde.net</p>
            <p>smesamontoyasimon@cesde.net</p>
            <p>ambarreraga@cesde.net</p>
          </Col>
          <Col md={4}>
            <h5>Redes Sociales</h5>
            <div>
              <FaFacebookF className="mx-2" />
              <FaTwitter className="mx-2" />
              <FaInstagram className="mx-2" />
              <FaGithub className="mx-2" />
              <FaWhatsapp className="mx-2" />
              <FaLinkedin className="mx-2" />
            </div>
          </Col>
          <hr />
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <img src={Logo} alt="Control de Gastos Logo" height="50" className='img-logo'/>
            <p className="mt-2">© 2024 Nombre de la Empresa. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
