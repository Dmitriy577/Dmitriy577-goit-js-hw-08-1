import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const divGallery = document.querySelector('.gallery');

function galereaImg(galleryItems) {
  const newGallery = galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    })
    .join('');

  return newGallery;
}

const newImg = galereaImg(galleryItems);
divGallery.insertAdjacentHTML('afterbegin', newImg);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  sourceAttr: 'href',
});