'use strict';
var KEYCODE = 27;
var body = document.querySelector('body');
var popup = document.querySelector('.popup');
var overlay = document.querySelector('.popup-overlay');
var closeModaleBtn = document.querySelector('.modal__close-btn');
var openModalButton = document.querySelector('#request-call');
var nameFieldFocus = document.querySelector('#modal-user-name');
var buttonNav = document.querySelector('.page-footer__btn--nav');
var buttonOffice = document.querySelector('.page-footer__btn--office');
var office = document.querySelector('.page-footer__office-list');
var nav = document.querySelector('.page-footer__nav');

// Модальное окно

function openModal() {
  popup.classList.remove('popup');
  popup.classList.add('popup-show');
  nameFieldFocus.focus();
}

function closeModal() {
  popup.classList.add('popup');
  popup.classList.remove('popup-show');
  body.style.overflow = 'visible';
}

openModalButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  openModal();
  body.style.overflow = 'hidden';
});

closeModaleBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  closeModal();
});

overlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  closeModal();
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYCODE) {
    closeModal();
  }
});

// Аккордеон

function accordionSwitching() {
  office.classList.toggle('page-footer__off');
  nav.classList.toggle('page-footer__off');
}

buttonNav.addEventListener('click', function () {
  accordionSwitching();
});

buttonOffice.addEventListener('click', function () {
  accordionSwitching();
});
