export function createMarkup(item) {
  return `<div class="cat-card">
        <img class="cat-img"
        src="${item[0].url}"
        alt="${item[0].breeds[0].name}"/>
        <div class="cat-info">
        <h1 class="cat-breed">${item[0].breeds[0].name}</h1>
         <p class="cat-description">${item[0].breeds[0].description}</p>
        <p class="cat-temperament">${item[0].breeds[0].temperament}</p>
        </div>
        </div>`;
}
