import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

function PreguntaRespuesta() {
  const [documento, setDocumento] = useState('Documento Ejemplo');
  const [pregunta, setPregunta] = useState('¿Cuál es la capital de Francia?');
  const [respuesta, setRespuesta] = useState('');
  const [messages, setMessages] = useState([
    { user: 'Sistema', text: '¿Cuál es la capital de Francia?' }
  ]);

  const handleRespuesta = (e) => {
    e.preventDefault();
    if (respuesta.trim()) {
      setMessages([...messages, { user: 'Usuario', text: respuesta }]);
      setRespuesta('');
      setTimeout(() => {
        // Simular respuesta del sistema
        setMessages([...messages, { user: 'Usuario', text: respuesta }, { user: 'Sistema', text: 'La capital de Francia es París.' }]);
      }, 1000);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <h2 className="my-4">Pregunta - Respuesta</h2>
          <Card>
            <Card.Body>
              <Card.Title>{documento}</Card.Title>
              <ListGroup variant="flush">
                {messages.map((message, index) => (
                  <ListGroup.Item key={index} className={message.user === 'Usuario' ? 'text-right' : 'text-left'}>
                    <strong>{message.user}: </strong>{message.text}
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Form onSubmit={handleRespuesta} className="mt-3">
                <Form.Group controlId="formRespuesta">
                  <Form.Label>Escribe tu respuesta</Form.Label>
                  <Form.Control 
                    type="text" 
                    value={respuesta}
                    onChange={(e) => setRespuesta(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                  Enviar Respuesta
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PreguntaRespuesta;
