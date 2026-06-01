// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { studentData } from './data/mockData';
import './App.css';

// Clave para guardar el usuario en el navegador
const SESSION_KEY = 'capamap_session';

// Componente que protege las rutas privadas
function RutaProtegida({ user, children }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default function App() {
  // Estado del usuario - se carga desde localStorage si ya había sesión
  const [user, setUser] = useState(null);

  // Al cargar la app, verificar si hay una sesión guardada en el navegador
  useEffect(() => {
    const sessionGuardada = localStorage.getItem(SESSION_KEY);
    if (sessionGuardada) {
      setUser(JSON.parse(sessionGuardada));
    }
  }, []);

  // Función para iniciar sesión local (formulario o simulación Google)
  const handleLogin = (name, email) => {
    const newUser = {
      name: name,
      email: email,
      picture: 'https://i.pravatar.cc/100?img=12'
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(newUser));
    setUser(newUser);
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Navbar solo aparece si el usuario está logueado */}
        {user && <Navbar user={user} onLogout={handleLogout} />}

        <Routes>
          {/* Ruta de Login - si ya hay sesión, redirige al inicio */}
          <Route
            path="/login"
            element={
              user ? (
                <Navigate to="/" replace />
              ) : (
                <Login onLoginLocal={handleLogin} />
              )
            }
          />

          {/* Ruta del Mapa de Capacidades - ruta privada */}
          <Route
            path="/"
            element={
              <RutaProtegida user={user}>
                <Home />
              </RutaProtegida>
            }
          />

          {/* Ruta del Perfil - ruta privada */}
          <Route
            path="/profile"
            element={
              <RutaProtegida user={user}>
                <Profile user={user} />
              </RutaProtegida>
            }
          />

          {/* Cualquier otra URL redirige al inicio */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Footer solo visible si hay sesión activa */}
        {user && (
          <footer className="footer">
            <div className="container">
              <p>© {new Date().getFullYear()} - {studentData.name} | {studentData.university}</p>
            </div>
          </footer>
        )}
      </div>
    </BrowserRouter>
  );
}
