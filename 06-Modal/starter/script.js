'use strict';
let showModal = document.querySelectorAll('.show-modal');
let closeModal = document.querySelector('.close-modal');
let modal = document.querySelector('.modal');
let showOverlay = document.querySelector('.overlay');
let unhide = function () {
  modal.classList.remove('hidden');
  showOverlay.classList.remove('hidden');
};
let hide = function () {
  modal.classList.add('hidden');
  showOverlay.classList.add('hidden');
};
for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener('click', unhide);

closeModal.addEventListener('click', hide);
showOverlay.addEventListener('click', hide);

