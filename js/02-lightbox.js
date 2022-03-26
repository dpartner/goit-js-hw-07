import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

{
  /* <div class="gallery__item">
  <a class="gallery__item" href=${itemProp.original}>
  <img class="gallery__image" src=${itemProp.preview} alt=${itemProp.description} />
</a>
</div>; */
}

const container = document.querySelector('.gallery');

const createGalleryItemMarkup = itemProp => {
  return `<div class="gallery__item">
  <a class="gallery__item" href=${itemProp.original}>
  <img class="gallery__image" src=${itemProp.preview} alt=${itemProp.description} />
</a>
</div>`;
};

const allGaleryItems = galleryItems.map(createGalleryItemMarkup).join('');

container.insertAdjacentHTML('afterbegin', allGaleryItems);

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
