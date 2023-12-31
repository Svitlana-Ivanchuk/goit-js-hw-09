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
let chosenDate = null;

btnStart.addEventListener('click', () => {
  countdown.start();
});

// const flatpickr = require('flatpickr');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] >= Date.now()) {
      btnStart.disabled = false;
      chosenDate = selectedDates[0].getTime();
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
      btnStart.disabled = true;
    }
  },
};

flatpickr(inputDate, options);

const countdown = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentDate = Date.now();
      let deltaTime = chosenDate - currentDate;
      const ms = convertMs(deltaTime);
      updateTimer(ms);

      if (deltaTime <= 0) {
        clearInterval(this.intervalId);
        this.isActive = false;
      }
    }, 1000);
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function updateTimer({ days, hours, minutes, seconds }) {
  daysEl.textContent = `${days}`;
  hoursEl.textContent = `${hours}`;
  minsEl.textContent = `${minutes}`;
  secsEl.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
