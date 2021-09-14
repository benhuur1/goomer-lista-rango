export const API_URL = 'https://challange.goomer.com.br';

export function RESTAURANTES_GET() {
  return {
    url: `${API_URL}/restaurants`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}
