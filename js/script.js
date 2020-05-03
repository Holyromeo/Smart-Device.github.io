'use strict';
var KEYCODE = 27;
var popup = document.querySelector('.popup');
var closeModaleBtn = document.querySelector('.modal__close-btn');
var openModalButton = document.querySelector('#request-call');
var nameFieldFocus = document.querySelector('#modal-user-name');

// Модальное окно

var openModal = function () {
  popup.classList.remove('popup');
  popup.classList.add('popup-show');

  nameFieldFocus.focus();
};

var closeModal = function () {
  popup.classList.add('popup');
  popup.classList.remove('popup-show');
};

openModalButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  openModal();
});

closeModaleBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  closeModal();
});

popup.addEventListener('click', function (evt) {
  evt.preventDefault();
  closeModal();
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYCODE) {
    closeModal();
  }
});
