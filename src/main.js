import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const loadMoreBtn = document.querySelector('.load-more');
const form = document.querySelector('.form');
const input = document.querySelector('.search-input');
let currentPage = 1;
let currentQuery = '';
let totalHits = 0;

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
  currentQuery = query;
  currentPage = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
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
