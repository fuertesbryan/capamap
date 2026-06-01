import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <NavLink to="/" className="navbar-brand">
          CapaMap
        </NavLink>

        {user && (
          <ul className="navbar-menu">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "navbar-item active" : "navbar-item"}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) => isActive ? "navbar-item active" : "navbar-item"}
              >
                Mi Perfil
              </NavLink>
            </li>
            <li className="navbar-user">
              <div className="navbar-avatar-letter">
                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <span className="navbar-username">{user.name}</span>
              <button onClick={onLogout} className="btn-logout">
                Salir
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
