import React from 'react';
import { maturityLevels } from '../data/mockData';

export default function CapabilityDetail({ capability, isOpen, onClose }) {
  if (!isOpen || !capability) return null;

  const levelInfo = maturityLevels[capability.maturity];

  const categoryNames = {
    estrategicas: "Estratégica",
    operativas: "Operativa / Core",
    soporte: "Soporte / Apoyo"
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="modal-header-section">
          <span className="modal-category-label">
            Capacidad {categoryNames[capability.category]}
          </span>
          <h2 className="modal-title-text">{capability.name}</h2>
          <div className="modal-meta-label">
            Código: {capability.id} | Jerarquía: Nivel {capability.level}
          </div>
        </div>

        <div className="modal-body-section">
          <div className="modal-block">
            <div className="modal-block-title">Descripción</div>
            <div className="modal-block-text">{capability.description}</div>
          </div>

          <div className="modal-block">
            <div className="modal-block-title">Nivel de Madurez</div>
            <div className="modal-block-text" style={{ fontWeight: 'bold', color: levelInfo.color }}>
              {levelInfo.name}
            </div>
            <div className="modal-block-text" style={{ fontStyle: 'italic', color: '#666666', marginTop: '4px', fontSize: '13px' }}>
              {levelInfo.desc}
            </div>
          </div>

          <div className="modal-block">
            <div className="modal-block-title">Procesos Relacionados</div>
            <ul className="modal-list">
              {capability.processes.map((proc, index) => (
                <li key={index}>{proc}</li>
              ))}
            </ul>
          </div>

          <div className="modal-block">
            <div className="modal-block-title">Software de Soporte</div>
            <div className="modal-app-info-box">
              <div className="modal-app-name-label">{capability.targetApp}</div>
              <div className="modal-app-desc-label">{capability.appDetail}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
