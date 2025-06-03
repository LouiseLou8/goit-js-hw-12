import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('.search-input');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = input.value.trim();
  if (query === '') {
    iziToast.error({
      message: 'Введіть запит для пошуку',
      position: 'topRight',
    });
    return;
  }
  showLoader();
  clearGallery();

  try {
    const data = await getImagesByQuery(query);
    if (data.hits.length === 0) {
      iziToast.error({
        message: 'Нічого не знайдено за запитом',
        position: 'topRight',
      });
      return;
    }
    createGallery(data.hits);
  } catch (error) {
    iziToast.error({
      message: 'Сталася помилка при отрманні даних',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});
