import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputDate = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button');
const timerEl = document.querySelector('.timer');
const fieldEl = document.querySelector('.field');

btnStart.setAttribute('disabled', '');

const flatpickr = require('flatpickr');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] >= Date.now()) {
      btnStart.disabled = false;
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
      btnStart.disabled = true;
    }
  },
};

flatpickr(inputDate, options);

btnStart.addEventListener('click', handleBtnStartClick);

function handleBtnStartClick(evt) {}
