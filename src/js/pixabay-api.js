import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50595135-236ed99e353605725b41c38ac';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw new Error('Помилка при отриманні зображень');
  }
}
