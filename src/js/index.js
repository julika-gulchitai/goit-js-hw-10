import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

import { selectEl, errorMessage, loaderMessage, catInfo } from './refs';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { createMarkup } from './markup';

let catBreedId = '';
errorMessage.classList.add('is-hidden');
let breedsList = [];

document.addEventListener('DOMContentLoaded', loaderMesEvent);
loaderMessage.classList.remove('is-hidden');
function loaderMesEvent() {
  fetchBreeds()
    .then(res => {
      breedsList = res;
      const options = res
        .map(item => {
          return `<option value="${item.id}">${item.name}</option>`;
        })
        .join('');
      selectEl.innerHTML = options;
      new SlimSelect({
        select: selectEl,
      });
      selectEl.classList.remove('is-hidden');
    })
    .finally(() => loaderMessage.classList.add('is-hidden'));

  selectEl.addEventListener('change', ev => {
    loaderMessage.classList.remove('is-hidden');
    errorMessage.classList.add('is-hidden');
    catBreedId = ev.currentTarget.value;
    catInfo.classList.add('is-hidden');

    fetchCatByBreed(catBreedId)
      .then(res => {
        catInfo.innerHTML = createMarkup(res);

        catInfo.classList.remove('is-hidden');
      })
      .catch(error => {
        console.log(error);
        errorMessage.classList.remove('is-hidden');
      })
      .finally(() => loaderMessage.classList.add('is-hidden'));
  });
}
