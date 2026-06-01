import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { companyData, maturityLevels } from '../data/mockData';
import CapabilityCard from '../components/CapabilityCard';
import CapabilityDetail from '../components/CapabilityDetail';

export default function Home() {
  const { data: capabilities, loading } = useFetch();

  const [searchTerm, setSearchTerm] = useState('');
  const [maturityFilter, setMaturityFilter] = useState('');
  const [selectedCap, setSelectedCap] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) {
    return (
      <div className="container" style={{ padding: '50px', textAlign: 'center' }}>
        <p>Cargando datos...</p>
      </div>
    );
  }

  const filteredCaps = capabilities.filter((cap) => {
    const coincideBusqueda =
      cap.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cap.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cap.targetApp.toLowerCase().includes(searchTerm.toLowerCase());

    const coincideMadurez =
      maturityFilter === '' ||
      cap.maturity.toString() === maturityFilter;

    return coincideBusqueda && coincideMadurez;
  });

  const estrategicas = filteredCaps.filter(c => c.category === 'estrategicas');
  const operativas = filteredCaps.filter(c => c.category === 'operativas');
  const soporte = filteredCaps.filter(c => c.category === 'soporte');

  const totalCaps = capabilities.length;
  const promedioMadurez = (capabilities.reduce((acc, curr) => acc + curr.maturity, 0) / totalCaps).toFixed(1);
  const coberturaSGA = Math.round(
    (capabilities.filter(c => c.targetApp.includes('SGA-Austro')).length / totalCaps) * 100
  );

  const handleCardClick = (capability) => {
    setSelectedCap(capability);
    setIsModalOpen(true);
  };

  return (
    <div className="container main-content">
      <header className="dashboard-header">
        <h1>Mapa de Capacidades</h1>
        <p className="dashboard-subtitle">
          Empresa: <strong>{companyData.name}</strong>
        </p>
      </header>

      {/* Estadísticas */}
      <section className="metrics-row">
        <div className="metric-card">
          <div>
            <span className="metric-label">Capacidades</span>
            <div className="metric-value">{totalCaps}</div>
          </div>
        </div>

        <div className="metric-card">
          <div>
            <span className="metric-label">Madurez Promedio</span>
            <div className="metric-value">{promedioMadurez} / 5</div>
          </div>
        </div>

        <div className="metric-card">
          <div>
            <span className="metric-label">Cobertura SGA-Austro</span>
            <div className="metric-value">{coberturaSGA}%</div>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="filters-row">
        <div className="search-input-box">
          <input
            type="text"
            placeholder="Buscar por nombre o código..."
            className="input-field"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div>
          <select
            className="filter-select-box"
            value={maturityFilter}
            onChange={(e) => setMaturityFilter(e.target.value)}
          >
            <option value="">Todos los niveles</option>
            {Object.entries(maturityLevels).map(([level, info]) => (
              <option key={level} value={level}>
                Nivel {level} - {info.name}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Leyenda */}
      <section className="legend-row">
        <span className="legend-title">Nivel de Madurez:</span>
        <div className="legend-list">
          {Object.entries(maturityLevels).map(([level, info]) => (
            <div key={level} className="legend-dot-item">
              <span className="color-dot" style={{ backgroundColor: info.color }}></span>
              <span>{info.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mapa en 3 columnas */}
      <main className="map-grid">
        <div className="map-column-box">
          <h3 className="column-header-title">Estratégicas</h3>
          <p className="column-header-desc">Planificación a largo plazo.</p>
          <div className="cards-list">
            {estrategicas.length > 0 ? (
              estrategicas.map((cap) => (
                <CapabilityCard key={cap.id} capability={cap} onClick={handleCardClick} />
              ))
            ) : (
              <p style={{ fontSize: '12px', color: '#888888' }}>Sin resultados</p>
            )}
          </div>
        </div>

        <div className="map-column-box">
          <h3 className="column-header-title">Operativas</h3>
          <p className="column-header-desc">Actividades principales del negocio.</p>
          <div className="cards-list">
            {operativas.length > 0 ? (
              operativas.map((cap) => (
                <CapabilityCard key={cap.id} capability={cap} onClick={handleCardClick} />
              ))
            ) : (
              <p style={{ fontSize: '12px', color: '#888888' }}>Sin resultados</p>
            )}
          </div>
        </div>

        <div className="map-column-box">
          <h3 className="column-header-title">Soporte</h3>
          <p className="column-header-desc">Procesos de apoyo interno.</p>
          <div className="cards-list">
            {soporte.length > 0 ? (
              soporte.map((cap) => (
                <CapabilityCard key={cap.id} capability={cap} onClick={handleCardClick} />
              ))
            ) : (
              <p style={{ fontSize: '12px', color: '#888888' }}>Sin resultados</p>
            )}
          </div>
        </div>
      </main>

      <CapabilityDetail
        capability={selectedCap}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedCap(null);
        }}
      />
    </div>
  );
}
