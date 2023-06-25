import throttle from 'lodash.throttle';

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let timerId = null;

btnStart.addEventListener('click', throttle(handleBtnStartClick, 1000));
btnStop.addEventListener('click', hanleBtnStopClick);

function handleBtnStartClick(evt) {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  if (btnStart.toggleAttribute('disabled')) {
    btnStop.removeAttribute('disabled');
  }
}

function hanleBtnStopClick(evt) {
  if (btnStop.toggleAttribute('disabled')) {
    btnStart.removeAttribute('disabled');
  }
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
