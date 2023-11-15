// https://api.thecatapi.com/v1/images/search
// https://api.thecatapi.com/v1/images/search?limit=10
//  https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME
// ["x-api-key"] = 'api_key=live_QWdpJtEUsFiXP2YRGBjBfxY4f7HD9ziNIoiKQPA5Frt0IGkAXjHM2v7WnPeInPxQ'
// https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи
import { errorMessage, selectEl } from "./refs";

const BASE_URL = 'https://api.thecatapi.com/v1'
const API_KEY = 'live_QWdpJtEUsFiXP2YRGBjBfxY4f7HD9ziNIoiKQPA5Frt0IGkAXjHM2v7WnPeInPxQ'


export function fetchBreeds() {
    return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then((res) => {
        if (!res.ok) {
            throw new Error(res.status);
        }
        return res.json();
    })
        .catch(err => {
            if (err.message === '404' )
                errorMessage.classList.remove('is-hidden');
            selectEl.classList.add('is-hidden');

   })
}

export function fetchCatByBreed(breedId) {
    return fetch(`${ BASE_URL }/images/search?api_key=${API_KEY}&breed_ids=${breedId}`).then((res) => {
        if (!res.ok) {
            throw new Error(res.status);
        }
        return res.json();
    })
        .catch(err => {
            if (err.message === '404' )
                errorMessage.classList.remove('is-hidden');
            selectEl.classList.add('is-hidden');
   })
}

// export function createMarkup(item) {
//     return `<div>
//         <img class="img-cat"
//         src="${item[0].url}"
//         alt="${item[0].breeds[0].name}"/>
//         <div>
//         <h1 class="cat-breed">${item[0].breeds[0].name}</h1>
//          <p class="cat-description">${item[0].breeds[0].description}</p>
//         <p class="cat-temperament">${item[0].breeds[0].temperament}</p>
//         </div>
//         </div>`;
// }