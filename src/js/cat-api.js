import { errorMessage, selectEl } from './refs';

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_QWdpJtEUsFiXP2YRGBjBfxY4f7HD9ziNIoiKQPA5Frt0IGkAXjHM2v7WnPeInPxQ';

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .catch(err => {
      if (err.message === '404') errorMessage.classList.remove('is-hidden');
      selectEl.classList.add('is-hidden');
    });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  )
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .catch(err => {
      if (err.message === '404') errorMessage.classList.remove('is-hidden');
    });
}
