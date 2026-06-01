import { capabilities } from '../data/mockData';

/**
 * Simula una petición de red asíncrona para obtener las capacidades.
 * Retorna una Promesa con los datos después de un retraso de 400ms.
 */
export function getCapabilities() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(capabilities);
    }, 400);
  });
}
