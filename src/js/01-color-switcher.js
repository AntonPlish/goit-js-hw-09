const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;

btnStart.addEventListener('click', startChangeColor);
btnStop.addEventListener('click', stopChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function startChangeColor() {
    btnStart.disabled = true;
    btnStop.disabled = false;
    body.style.backgroundColor = getRandomHexColor();
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
};

function stopChangeColor() {
    clearInterval(timerId);
    btnStart.disabled = false;
    btnStop.disabled = true;
};