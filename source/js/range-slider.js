const sliderContainer = document.querySelector('.form__range-wrapper');
const inputMin = document.querySelector('#input-min');
const inputMax = document.querySelector('#input-max');
const inputs = [inputMin, inputMax];

const createSlider = () => {
  noUiSlider.create(sliderContainer, {
    range: {
      min: 0,
      max: 1065,
    },
    start: [0, 900],
    connect: true,
    step: 1,
    format: {
      to: function (value) {
        return parseFloat(value).toFixed(0);
      },
      from: function (value) {
        return parseFloat(value).toFixed(0);
      },
    },
  });
};

const updateInputs = () => {
  sliderContainer.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = values[handle];
  });
};

const initRangeSlider = () => {
  createSlider();
  updateInputs();

  inputMin.addEventListener('input', function () {
    sliderContainer.noUiSlider.set([this.value, null]);
  });

  inputMax.addEventListener('input', function () {
    sliderContainer.noUiSlider.set([null, this.value]);
  });
};

export { initRangeSlider };
