import fetchPic from './js/pixabay-api';

const form = document.querySelector('.form');
const formInput = document.querySelector('.form_input');

form.addEventListener('submit', e => {
  e.preventDefault();

  if (!formInput.value) {
    console.log('No value provided');
    return;
  }

  fetchPic(formInput.value);
});
