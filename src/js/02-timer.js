import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputDate = document.querySelector(input);
const btnStart = document.querySelector('button');

console.log(inputDate);

// const flatpickr = require('flatpickr');
flatpickr(inputDate, options);

inputDate.addEventListener('click', handleInputDateClick);

function handleInputDateClick(evt) {
  console.log(inputDate);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[1]);
  },
};
