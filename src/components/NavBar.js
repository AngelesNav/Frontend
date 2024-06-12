import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

function NavBar({ isAuthenticated, handleLogout }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Mi Aplicación</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {!isAuthenticated ? (
            <>
              <Nav.Link as={Link} to="/">Iniciar Sesión</Nav.Link>
              <Nav.Link as={Link} to="/registro">Registro</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/calificacion-feedback">Calificación y Feedback</Nav.Link>
              <Nav.Link as={Link} to="/pregunta-respuesta">Pregunta - Respuesta</Nav.Link>
              <Nav.Link as={Link} to="/gestion-documentos">Gestión de Documentos</Nav.Link>
              <Button variant="outline-light" onClick={handleLogout}>Cerrar Sesión</Button>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
