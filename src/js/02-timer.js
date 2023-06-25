import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputDate = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button');

const flatpickr = require('flatpickr');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates > defaultDate) {
      btnStart.removeAttribute('disabled', '');
    }
  },
};

console.log(Date.now());

flatpickr(inputDate, options);
btnStart.setAttribute('disabled', '');

btnStart.addEventListener('click', handleBtnStartClick);

function handleBtnStartClick(evt) {}
