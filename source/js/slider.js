const sliderButtons = document.querySelectorAll('.hero__slides-radio');
const sliderItems = document.querySelectorAll('.hero__slider-item');

const sliderButtonNext = document.querySelector('.hero__slider-button--next');
const sliderButtonPrev = document.querySelector('.hero__slider-button--prev');

const hero = document.querySelector('.hero');

let slideIndex = 0;

const setHeroClass = () => {
  const color = sliderItems[slideIndex].getAttribute('data-color');

  if (color) {
    hero.setAttribute('data-color', color);
  } else {
    hero.removeAttribute('data-color');
  }
};

const isLastSlide = () => {
  if (slideIndex === (sliderButtons.length - 1) && !sliderButtonNext.disabled) {
    sliderButtonNext.disabled = true;
  }
};

const isFirstSlide = () => {
  if (!slideIndex && !sliderButtonPrev.disabled) {
    sliderButtonPrev.disabled = true;
  }
};

const isOtherSlide = () => {
  if (slideIndex && sliderButtonPrev.disabled) {
    sliderButtonPrev.disabled = false;
  }

  if (slideIndex !== (sliderButtons.length - 1) && sliderButtonNext.disabled) {
    sliderButtonNext.disabled = false;
  }
};

const removeIsActive = () => {
  sliderButtons[slideIndex].classList.remove('is-active');
  sliderItems[slideIndex].classList.remove('is-active');
};

const addIsActive = () => {
  sliderButtons[slideIndex].classList.add('is-active');
  sliderItems[slideIndex].classList.add('is-active');
};

const onSliderButtonNextClick = (evt) => {
  evt.preventDefault();
  removeIsActive();
  slideIndex = slideIndex + 1;
  setHeroClass();
  isOtherSlide(slideIndex);
  isLastSlide(slideIndex);
  addIsActive();
};

const onSliderButtonPrevClick = (evt) => {
  evt.preventDefault();
  removeIsActive();
  slideIndex = slideIndex - 1;
  setHeroClass();
  isOtherSlide(slideIndex);
  isFirstSlide(slideIndex);
  addIsActive();
};

const initSlider = () => {
  sliderButtonNext.addEventListener('click', onSliderButtonNextClick);
  sliderButtonPrev.addEventListener('click', onSliderButtonPrevClick);
  sliderButtons.forEach((button, index) => {
    button.addEventListener('click', (evt) => {
      slideIndex = index;
      evt.preventDefault();
      setHeroClass();
      isLastSlide(index);
      isFirstSlide(index);
      isOtherSlide(index);
      document.querySelector('.hero__slides-radio.is-active').classList.remove('is-active');
      document.querySelector('.hero__slider-item.is-active').classList.remove('is-active');
      button.classList.add('is-active');
      sliderItems[index].classList.add('is-active');
    });
  });
};

export { initSlider };
