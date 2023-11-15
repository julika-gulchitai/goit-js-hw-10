// Під час завантаження сторінки має виконуватися HTTP-запит за колекцією порід. Для цього необхідно виконати GET-запит на ресурс https://api.thecatapi.com/v1/breeds, що повертає масив об'єктів. У разі успішного запиту, необхідно наповнити
// select.breed - select опціями так, щоб value опції містило id породи, а в інтерфейсі користувачеві відображалася назва породи.

// Напиши функцію fetchBreeds(), яка виконує HTTP-запит і повертає проміс із масивом порід - результатом запиту. Винеси її у файл cat-api.js та зроби іменований експорт.
// GET-запит на ресурс https://api.thecatapi.com/v1/breeds

import SlimSelect from 'slim-select';
import { selectEl, errorMessage, loaderMessage, catInfo } from "./refs";
import { fetchBreeds, fetchCatByBreed, createMarkup } from "./cat-api";

console.log(selectEl);
selectEl = new SlimSelect({
  select: '#selectElement'
})
 console.log(selectEl);

 selectEl.id = "#single";
 console.log(selectEl);

let catBreedId = '';
errorMessage.classList.add('is-hidden');
let breedsList = [];

document.addEventListener('DOMContentLoaded', loaderMesEvent);
  loaderMessage.classList.remove('is-hidden'); 
function loaderMesEvent() {

    fetchBreeds()
        .then((res) => {
    breedsList = res;
    const options = res.map((item) => {
        return `<option value="${item.id}">${item.name}</option>`
    }).join('');
    selectEl.innerHTML = options;
        })
.finally(() =>   loaderMessage.classList.add('is-hidden') ) 

selectEl.addEventListener('change', (ev) => {
    loaderMessage.classList.add('is-hidden');
 catBreedId = ev.currentTarget.value;

console.log(catBreedId);
 
    fetchCatByBreed(catBreedId).then((res) => {
    const cat =
   `<div class="cat-card">
        <img class="img-cat"
        src="${res[0].url}"
        alt="${res[0].breeds[0].name}"/>
        <div class="cat-info">
        <h1 class="cat-breed">${res[0].breeds[0].name}</h1>
         <p class="cat-description">${res[0].breeds[0].description}</p>
        <p class="cat-temperament"><strong>Temperament: </strong>${res[0].breeds[0].temperament}</p>
        </div>
        </div>`;
       
    catInfo.innerHTML = cat;
    })});


}