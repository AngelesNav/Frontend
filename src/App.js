import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registro from './components/Registro';
import CalificacionFeedback from './components/CalificacionFeedback';
import PreguntaRespuesta from './components/PreguntaRespuesta';
import GestionDocumentos from './components/GestionDocumentos';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div>
        <NavBar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Login handleLogin={handleLogin} />} />
            <Route path="/registro" element={<Registro />} />
            {isAuthenticated && (
              <>
                <Route path="/calificacion-feedback" element={<CalificacionFeedback />} />
                <Route path="/pregunta-respuesta" element={<PreguntaRespuesta />} />
                <Route path="/gestion-documentos" element={<GestionDocumentos />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
