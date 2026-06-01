import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

export default function Login({ onLoginLocal }) {
  const navigate = useNavigate();

  const { values, handleChange } = useForm({
    username: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.username || !values.password) {
      alert("Por favor ingrese su usuario y contraseña.");
      return;
    }
    // Iniciamos sesión usando el usuario que ingresa el evaluador y una dirección corporativa
    onLoginLocal(values.username, `${values.username.toLowerCase()}@distriaustro.com`);
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">CapaMap</h1>
        <p className="login-subtitle">Gestión de Capacidades - Distribuidora del Austro</p>

        <form onSubmit={handleSubmit}>
          <div className="login-form-group">
            <label className="login-label">Usuario de Evaluación</label>
            <input
              type="text"
              name="username"
              placeholder="Ejemplo: admin o consultor"
              className="input-field"
              value={values.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="login-form-group">
            <label className="login-label">Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="input-field"
              value={values.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
            Ingresar al Sistema
          </button>
        </form>

        <p style={{ fontSize: '11px', color: '#888888', marginTop: '15px' }}>
          Puede ingresar cualquier usuario y contraseña para acceder a la demostración del proyecto.
        </p>
      </div>
    </div>
  );
}
