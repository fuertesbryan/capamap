import React from 'react';
import { studentData, companyData } from '../data/mockData';

export default function Profile({ user }) {
  if (!user) return null;

  return (
    <div className="container main-content">
      <header className="dashboard-header">
        <h1>Mi Perfil</h1>
        <p className="dashboard-subtitle">Información del proyecto de Prácticum 3.</p>
      </header>

      <div className="profile-layout">
        <aside className="profile-side-col">
          <div className="card user-info-card">
            <div className="user-avatar-large-letter">
              {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <h3 className="user-name-title">{user.name}</h3>
            <div className="user-email-text">{user.email}</div>
          </div>

          <div className="card">
            <div className="info-title-header">Estudiante</div>
            <div className="info-item-group">
              <span className="info-item-label">Nombre</span>
              <div className="info-item-value">{studentData.name}</div>
            </div>
            <div className="info-item-group">
              <span className="info-item-label">Universidad</span>
              <div className="info-item-value">{studentData.university}</div>
            </div>
            <div className="info-item-group">
              <span className="info-item-label">Carrera</span>
              <div className="info-item-value">{studentData.carrera}</div>
            </div>
            <div className="info-item-group">
              <span className="info-item-label">Materia</span>
              <div className="info-item-value">{studentData.materia}</div>
            </div>
          </div>
        </aside>

        <main className="profile-main-col">
          <div className="card">
            <div className="info-title-header">La Empresa</div>
            <div className="info-item-group">
              <span className="info-item-label">Nombre</span>
              <div className="info-item-value">{companyData.name}</div>
            </div>
            <div className="info-item-group">
              <span className="info-item-label">Sector</span>
              <div className="info-item-value">{companyData.sector}</div>
            </div>
            <div className="info-item-group">
              <span className="info-item-label">Descripción</span>
              <p style={{ fontSize: '14px', marginTop: '4px', color: '#555555' }}>
                {companyData.description}
              </p>
            </div>
            <div className="info-item-group">
              <span className="info-item-label">Problema encontrado</span>
              <p style={{ fontSize: '14px', marginTop: '4px', color: '#555555' }}>
                {companyData.problem}
              </p>
            </div>
          </div>

          <div className="card">
            <div className="info-title-header">Aplicación Propuesta</div>
            <div className="info-item-group">
              <span className="info-item-label">Nombre</span>
              <div className="info-item-value" style={{ color: '#0070f3' }}>
                {companyData.targetApp.name}
              </div>
            </div>
            <div className="info-item-group">
              <span className="info-item-label">Descripción</span>
              <p style={{ fontSize: '14px', marginTop: '4px', color: '#555555' }}>
                {companyData.targetApp.description}
              </p>
            </div>
            <div className="info-item-group">
              <span className="info-item-label">Beneficios</span>
              <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '14px', color: '#555555' }}>
                {companyData.targetApp.benefits.map((benefit, index) => (
                  <li key={index} style={{ marginBottom: '4px' }}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
