import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputDate = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minsEl = document.querySelector('[data-minutes]');
const secsEl = document.querySelector('[data-seconds]');

btnStart.setAttribute('disabled', '');
let selectedDate = null;
let currentDate = null;

btnStart.addEventListener('click', () => {
  countdown.start();
});

const flatpickr = require('flatpickr');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] >= Date.now()) {
      btnStart.disabled = false;
      selectedDate = selectedDates[0].getTime();
      console.log(selectedDate);
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
      btnStart.disabled = true;
    }
  },
};

flatpickr(inputDate, options);

const countdown = {
  intervalId: null,

  start() {
    currentDate = Date.now();

    intervalId = setInterval(() => {
      const deltaTime = currentDate - selectedDate;
      console.log(deltaTime);
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      updateTimer({ days, hours, minutes, seconds });
    }, 1000);
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimer({ days, hours, minutes, seconds }) {
  daysEl.textContent = `${days}`;
  hoursEl.textContent = `${hours}`;
  minsEl.textContent = `${minutes}`;
  secsEl.textContent = `${seconds}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}
