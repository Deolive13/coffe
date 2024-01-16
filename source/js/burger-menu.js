const header = document.querySelector('.header');
const navToggle = document.querySelector('.header__nav-toggle');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    header.classList.remove('is-open');
  }
};

const onDocumentClick = (evt) => {
  if(!evt.target.closest('.header')) {
    header.classList.remove('is-open');
  }
};

const initBurgerMenu = () => {
  navToggle.addEventListener('click', () => header.classList.toggle('is-open'));
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onDocumentClick);
};

export { initBurgerMenu };
