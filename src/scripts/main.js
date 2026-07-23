'use strict';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const submitBtn = form.querySelector('.form__submit');

  submitBtn.disabled = true;

  form.reset();
  resetAutofillStyles(form);
  submitBtn.disabled = false;
});

function resetAutofillStyles(formEl) {
  const fields = formEl.querySelectorAll('.form__input');

  fields.forEach((field) => {
    const clone = field.cloneNode(true);

    clone.value = '';
    field.replaceWith(clone);
  });
}

const burgerBtn = document.querySelector('.icon-link--burger');
const closeBtn = document.querySelector('.icon-link--close');
const menu = document.querySelector('.menu');
const body = document.body;

let scrollY = 0;

function openMenu() {
  scrollY = window.scrollY;
  menu.classList.add('menu--open');
  body.classList.add('no-scroll');
  body.style.top = `-${scrollY}px`;
}

function closeMenu() {
  menu.classList.remove('menu--open');
  body.classList.remove('no-scroll');
  body.style.top = '';
  window.scrollTo(0, scrollY);
}

burgerBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
