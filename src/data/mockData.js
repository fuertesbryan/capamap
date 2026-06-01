// src/data/mockData.js

export const studentData = {
  name: "Fuertes Brayan",
  university: "Universidad Técnica Particular de Loja",
  carrera: "Ingeniería en Tecnologías de la Información",
  materia: "Desarrollo de Aplicaciones Nativas en Cloud",
  tutor: "Ing. Tutor de Cátedra",
  ciclo: "Octavo Ciclo",
  practicum: "Prácticum 3",
  date: "Mayo - Septiembre 2026"
};

export const companyData = {
  name: "Distribuidora del Austro S.A.",
  sector: "Logística y Distribución",
  description: "Empresa dedicada a la distribución de productos de consumo masivo en la zona sur del Ecuador. Trabaja con supermercados y tiendas minoristas en las provincias de Azuay, Loja y El Oro.",
  problem: "No existe control automatizado de inventarios entre bodegas. La preparación de pedidos es manual y los vehículos de despacho no tienen seguimiento en tiempo real.",
  targetApp: {
    name: "SGA-Austro",
    description: "Sistema web para gestionar inventarios, automatizar la facturación y optimizar rutas de entrega.",
    benefits: [
      "Control de stock en tiempo real entre bodegas.",
      "Reducción de errores en la preparación de pedidos.",
      "Rutas de entrega optimizadas con GPS.",
      "Facturación electrónica integrada con el SRI."
    ]
  }
};

export const maturityLevels = {
  1: {
    name: "Incipiente",
    desc: "Los procesos no están documentados y dependen de cada persona.",
    color: "#ef4444"
  },
  2: {
    name: "Repetible",
    desc: "Hay patrones básicos pero sin documentación formal.",
    color: "#f97316"
  },
  3: {
    name: "Definido",
    desc: "Procesos documentados y estandarizados en la empresa.",
    color: "#eab308"
  },
  4: {
    name: "Gestionado",
    desc: "Se miden y controlan los procesos con indicadores.",
    color: "#3b82f6"
  },
  5: {
    name: "Optimizado",
    desc: "Mejora continua mediante tecnología e innovación.",
    color: "#10b981"
  }
};

export const capabilities = [
  // ESTRATÉGICAS
  {
    id: "EST-01",
    name: "Planificación de Demanda",
    category: "estrategicas",
    description: "Calcular los niveles de demanda para planificar las compras y el almacenamiento.",
    level: 1,
    maturity: 3,
    processes: [
      "Análisis de histórico de ventas",
      "Planificación de compras a proveedores",
      "Definición de stock mínimo"
    ],
    targetApp: "SGA-Austro - Módulo de Analítica",
    appDetail: "Proyecta la demanda usando datos históricos de ventas."
  },
  {
    id: "EST-02",
    name: "Gestión de Proveedores",
    category: "estrategicas",
    description: "Mantener y evaluar las relaciones con fabricantes y marcas representadas.",
    level: 1,
    maturity: 2,
    processes: [
      "Evaluación de proveedores",
      "Negociación de contratos",
      "Seguimiento de tiempos de entrega"
    ],
    targetApp: "ERP Corporativo - SAP",
    appDetail: "Módulo de gestión de compras y abastecimiento."
  },
  {
    id: "EST-03",
    name: "Expansión Geográfica",
    category: "estrategicas",
    description: "Planificar la apertura de nuevas rutas y bodegas en la región sur.",
    level: 2,
    maturity: 1,
    processes: [
      "Estudios de mercado por provincia",
      "Evaluación de bodegas aliadas",
      "Análisis de rentabilidad por ruta"
    ],
    targetApp: "SGA-Austro - Módulo de Rutas",
    appDetail: "Análisis geográfico de expansión mediante mapas."
  },

  // OPERATIVAS
  {
    id: "OPE-01",
    name: "Ventas y Facturación",
    category: "operativas",
    description: "Registro de pedidos y emisión de facturas electrónicas a clientes.",
    level: 1,
    maturity: 4,
    processes: [
      "Registro de pedidos en dispositivos móviles",
      "Aprobación de crédito del cliente",
      "Emisión de factura electrónica al SRI"
    ],
    targetApp: "SGA-Austro - Portal de Ventas",
    appDetail: "Facturación directa conectada al sistema de despacho."
  },
  {
    id: "OPE-02",
    name: "Control de Inventarios",
    category: "operativas",
    description: "Controlar el stock en la bodega principal y las bodegas satélite.",
    level: 2,
    maturity: 2,
    processes: [
      "Actualización de stock por movimientos",
      "Conteos físicos semanales",
      "Registro de devoluciones de clientes"
    ],
    targetApp: "SGA-Austro - Módulo WMS",
    appDetail: "Control de inventario en la nube con soporte móvil."
  },
  {
    id: "OPE-03",
    name: "Preparación de Pedidos",
    category: "operativas",
    description: "Preparar físicamente los pedidos en bodega usando códigos de barra.",
    level: 2,
    maturity: 3,
    processes: [
      "Generación de rutas de picking",
      "Escaneo de productos en percha",
      "Embalaje y paletizado por zona"
    ],
    targetApp: "SGA-Austro - App de Bodega",
    appDetail: "Lectura por terminales móviles Android en bodega."
  },
  {
    id: "OPE-04",
    name: "Distribución y Entrega",
    category: "operativas",
    description: "Carga de camiones, ruteo y entrega del pedido al cliente.",
    level: 3,
    maturity: 1,
    processes: [
      "Asignación de pedidos a rutas",
      "Despacho con guías de remisión",
      "Entrega y firma digital del cliente"
    ],
    targetApp: "SGA-Austro - App de Conductores",
    appDetail: "App para choferes con GPS y reporte de entrega."
  },

  // SOPORTE
  {
    id: "SOP-01",
    name: "Gestión de Personal",
    category: "soporte",
    description: "Reclutamiento, pago de nómina y capacitación del personal.",
    level: 1,
    maturity: 5,
    processes: [
      "Cálculo y pago de nómina mensual",
      "Evaluación del clima organizacional",
      "Capacitación en seguridad industrial"
    ],
    targetApp: "Sistema de Nómina - TalentHR",
    appDetail: "Software interno para administración de personal."
  },
  {
    id: "SOP-02",
    name: "Contabilidad y Finanzas",
    category: "soporte",
    description: "Registro contable, cobros a clientes y obligaciones tributarias.",
    level: 1,
    maturity: 4,
    processes: [
      "Registro de compras y gastos",
      "Cobro a clientes y gestión de cartera",
      "Declaraciones al SRI"
    ],
    targetApp: "ERP Corporativo - SAP",
    appDetail: "Módulos financieros del sistema ERP."
  },
  {
    id: "SOP-03",
    name: "Soporte de TI",
    category: "soporte",
    description: "Mantenimiento de equipos, redes y soporte técnico al personal.",
    level: 2,
    maturity: 3,
    processes: [
      "Atención de incidencias técnicas",
      "Mantenimiento de red local y VPN",
      "Respaldos de bases de datos"
    ],
    targetApp: "Mesa de Ayuda - GLPI",
    appDetail: "Herramienta de tickets de soporte técnico."
  }
];
