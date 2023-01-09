import { galleryItems } from "./gallery-items.js";
// Change code below this line
const containerGallery = document.querySelector(".gallery");
const listGalleryMarkup = createGalleryMarkup(galleryItems);
function createGalleryMarkup(items) {
  return items
    .map(
      (item) => `
    <div class="gallery__item">
    <a class="gallery__item"
       href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>
</div>
    `
    )
    .join("");
}

containerGallery.insertAdjacentHTML("beforeend", listGalleryMarkup);
console.log(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// const galleryMarkup = createGalleryMarkup(galleryItems);

// const galleryContainer = document.querySelector(".gallery");

// galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

// function createGalleryMarkup(items) {
//   const markup = items
//     .map(({ preview, original, description }) => {
//       return `
//         <a class="gallery__item"
//         href="${original}">
//         <img class="gallery__image" src="${preview}" alt="${description}" />
//         </a>
//     `;
//     })
//     .join("");

//   return markup;
// }

// const lightbox = new SimpleLightbox(".gallery a", {
//   captionsData: `alt`,
//   captionDelay: 250,
// });
