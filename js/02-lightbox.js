import { galleryItems } from './gallery-items.js';
// Change code below this line

const getGallery = document.querySelector('.gallery');
const gallerylist = galleryItems
  .map(
    ({ preview, description, original }) =>
      ` <li><a class='gallery__item' href='${original}' ><img class='gallery__image' src='${preview}' alt='${description}' title="${description}"> </a></li> `
  )
  .join('');

getGallery.innerHTML = gallerylist;

new SimpleLightbox('.gallery a ', {
  captionDelay: 250,
});
