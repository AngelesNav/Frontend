import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

function Login({ handleLogin }) {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Usuario de ejemplo
    const exampleUser = {
      correo: 'usuario@example.com',
      contrasena: 'password123',
    };

    if (correo === exampleUser.correo && contrasena === exampleUser.contrasena) {
      setError('');
      handleLogin();
    } else {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2 className="my-4">Inicio de sesión</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
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
              Iniciar Sesión
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
