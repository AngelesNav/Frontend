import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Registro() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Lógica para manejar el registro de usuario
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2 className="my-4">Registro de usuarios</h2>
          <Form onSubmit={handleRegister}>
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control 
                type="text" 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formCorreo">
              <Form.Label>Correo</Form.Label>
              <Form.Control 
                type="email" 
                value={correo}
                onChange={(e) => setCorreo(e.target.value)} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formContrasena">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control 
                type="password" 
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)} 
                required 
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Registrar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Registro;
