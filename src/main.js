// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import fetchPic from './js/pixabay-api';
import renderGallery from './js/render-functions';

const form = document.querySelector('.form');
const formInput = document.querySelector('.form_input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let simplelightbox = new SimpleLightbox('.gallery_item a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const searchQuerry = formInput.value.trim();

  if (searchQuerry === '') {
    iziToast.error({
      message: 'Search value is empty',
      position: 'topRight',
    });
    return;
  }

  gallery.innerHTML = ''; //cleanup prev gallery
  gallery.classList.add('hidden');
  loader.classList.remove('hidden');

  fetchPic(searchQuerry)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        loader.classList.add('hidden');
        gallery.classList.remove('hidden');
        return;
      }

      formInput.value = '';
      const galleryLoaded = renderGallery(data.hits);
      gallery.innerHTML = galleryLoaded;
      simplelightbox.refresh();
    })
    .catch(error => {
      iziToast.error({
        message: `${error.message || 'Something went wrong!'}`,
        position: 'topRight',
      });
    })
    .finally(() => {
      loader.classList.add('hidden');
      gallery.classList.remove('hidden');
    });
});
