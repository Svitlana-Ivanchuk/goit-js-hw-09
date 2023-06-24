import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// import Notiflix from 'notiflix';

const inputDate = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button');

console.log(inputDate);

// const flatpickr = require('flatpickr');

inputDate.addEventListener('click', handleInputDateClick);

function handleInputDateClick(evt) {
  flatpickr(inputDate, options);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
