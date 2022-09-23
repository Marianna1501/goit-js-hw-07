// В файле gallery - items.js есть массив galleryItems,
// который содержит объекты с информацией о изображениях: маленькое(превью), оригинальное(большое)
// и описание.Мы уже подключили его к каждому из JS - файлов проекта

import { galleryItems } from './gallery-items.js';

// Change code below this line

const getGallery = document.querySelector('.gallery');

const gallerylist = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<div class='gallery__item'> <a class='gallery__link' href='${original}' >
      <img class='gallery__image' src='${preview}' alt='${description}' data-source="${original}"> </a> </div>`
  )
  .join('');

getGallery.innerHTML = gallerylist;

getGallery.addEventListener('click', evt => {
  evt.preventDefault();

  const isGalleryImg = evt.target.nodeName !== 'IMG';
  if (isGalleryImg) {
    return;
  }

  modalImgOpen(evt);
});

function modalImgOpen(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const getImgAttribute = basicLightbox.create(`
  <img width="1400" height="900" src="${evt.target.dataset.source}">`);
  getImgAttribute.show();

  window.addEventListener('keydown', onCloseBtn);

  function onCloseBtn(evt) {
    if ((evt.code === 'Escape', 'click')) {
      getImgAttribute.close();
      window.removeEventListener('keydown', 'click', onCloseBtn);
    }
  }
}
