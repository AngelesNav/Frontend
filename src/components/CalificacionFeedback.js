import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

function CalificacionFeedback() {
  const [documento, setDocumento] = useState('Documento Ejemplo');
  const [pregunta, setPregunta] = useState('¿Cuál es la capital de Francia?');
  const [respuesta, setRespuesta] = useState('');
  const [calificacion, setCalificacion] = useState('');

  const handleCalificar = (e) => {
    e.preventDefault();
    // Lógica para manejar la calificación y feedback
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <h2 className="my-4">Calificación y Feedback</h2>
          <Card>
            <Card.Body>
              <Card.Title>{documento}</Card.Title>
              <Card.Text>{pregunta}</Card.Text>
              <Form onSubmit={handleCalificar}>
                <Form.Group controlId="formRespuesta">
                  <Form.Label>Respuesta</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={3} 
                    value={respuesta}
                    onChange={(e) => setRespuesta(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formCalificacion">
                  <Form.Label>Calificación</Form.Label>
                  <Form.Control 
                    type="number" 
                    value={calificacion}
                    onChange={(e) => setCalificacion(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                  Enviar Calificación
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CalificacionFeedback;
