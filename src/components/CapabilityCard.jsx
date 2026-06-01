import React from 'react';
import { maturityLevels } from '../data/mockData';

export default function CapabilityCard({ capability, onClick }) {
  const levelInfo = maturityLevels[capability.maturity];

  const cardStyle = {
    borderLeft: `5px solid ${levelInfo.color}`
  };

  const badgeStyle = {
    backgroundColor: levelInfo.color,
    color: 'white'
  };

  return (
    <div
      className="cap-card"
      onClick={() => onClick(capability)}
      style={cardStyle}
    >
      <div className="cap-card-top">
        <span className="cap-card-name-text">{capability.name}</span>
        <span className="cap-card-badge-label" style={badgeStyle}>
          Nivel {capability.maturity}
        </span>
      </div>

      <div className="cap-card-bottom">
        <span>Código: {capability.id}</span>
        <span className="cap-card-app-tag">
          {capability.targetApp.split(' - ')[0]}
        </span>
      </div>
    </div>
  );
}
