# Mi Proyecto del Practicum 3 - Mapa de Capacidades

Hola, en este repositorio presento mi proyecto para el Practicum 3. Es una aplicación web muy sencilla hecha con React para mostrar el mapa de capacidades de la empresa Distribuidora del Austro SA. El sistema evalúa la madurez de los procesos de la empresa y los asocia con el software que proponemos para solucionar sus problemas.

## Datos del Estudiante y la Materia
* **Estudiante:** Fuertes Brayan
* **Universidad:** Universidad Técnica Particular de Loja
* **Carrera:** Ingeniería en Tecnologías de la Información
* **Materia:** Desarrollo de Aplicaciones Nativas en Cloud
* **Periodo:** Mayo a Septiembre 2026

## Sobre la Empresa
La empresa seleccionada es Distribuidora del Austro SA, que se dedica a entregar productos de consumo masivo en la zona sur de Ecuador. Actualmente tienen inconvenientes porque la preparación de los pedidos es manual, no tienen un control automático de inventario entre sus bodegas y los camiones de reparto no tienen seguimiento en tiempo real.

## Mapa de Capacidades

| Área | Capacidad de Negocio | Madurez | Software de Soporte |
| :--- | :--- | :---: | :--- |
| Estratégica | Planificación de Demanda | 3 de 5 | SGA-Austro Módulo Analítica |
| Estratégica | Gestión de Proveedores | 2 de 5 | SAP ERP |
| Estratégica | Expansión Geográfica | 1 de 5 | SGA-Austro Módulo Rutas |
| Operativa | Ventas y Facturación | 4 de 5 | SGA-Austro Portal Ventas |
| Operativa | Control de Inventarios | 2 de 5 | SGA-Austro WMS |
| Operativa | Preparación de Pedidos | 3 de 5 | SGA-Austro App Bodega |
| Operativa | Distribución y Entrega | 1 de 5 | SGA-Austro App Conductores |
| Soporte | Gestión de Personal | 5 de 5 | TalentHR |
| Soporte | Contabilidad y Finanzas | 4 de 5 | SAP ERP |
| Soporte | Soporte de TI | 3 de 5 | Mesa de ayuda GLPI |

## ¿Qué hace la aplicación propuesta SGA-Austro?
Es la solución de software que proponemos para ayudar a la distribuidora. Sirve para:
* Sincronizar el inventario al instante entre la bodega principal y las bodegas pequeñas.
* Facilitar la preparación de pedidos en bodega leyendo códigos de barra desde el celular.
* Crear rutas de transporte eficientes para los despachadores de mercadería.

## Tecnologías que utilicé
* **Vite y React 19:** Para que la página cargue súper rápido.
* **React Router Dom:** Para poder pasar de una pantalla a otra en la navegación.
* **CSS normal y corriente:** Para darle estilos sencillos y adaptados a teléfonos móviles.

## Cómo instalar y probar el proyecto

Para correr el proyecto en tu computadora localmente, sigue estos pasos:

1. Instala todas las librerías necesarias con el comando:
   ```bash
   npm install
   ```
2. Arranca el servidor local con:
   ```bash
   npm run dev
   ```

Una vez que lo hagas, la terminal te dará una dirección local como `http://localhost:5173` para que abras la página en tu navegador.

## Enlace del proyecto subido a Internet
La aplicación está subida y funcionando en la plataforma Vercel en el siguiente enlace:
https://capamap.vercel.app
