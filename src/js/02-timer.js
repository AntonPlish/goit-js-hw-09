import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

// // all modules
// import Notiflix from 'notiflix';
// // one by one
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Report } from 'notiflix/build/notiflix-report-aio';
// import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
// import { Block } from 'notiflix/build/notiflix-block-aio';

let selectedDate = null;
let startTime = null;
let timerId = null;
const btnStart = document.querySelector('button[data-start]');
btnStart.setAttribute("disabled", true);
const styles = document.querySelector('.field');
const stylesSpan = document.querySelectorAll('span');
const stylesValue = document.querySelectorAll('.value');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] > new Date()) {
      btnStart.disabled = false;
      selectedDate = selectedDates[0];
    } else {
      btnStart.disabled = true;
      Notiflix.Notify.failure("Please choose a date in the future");
    };
  },
};
const fp = flatpickr("#datetime-picker", { ...options });

styles.parentNode.style.display = 'flex';
for (let i = 0; i < stylesSpan.length; i++) {
  stylesSpan[i].style.display = 'block';
  stylesSpan[i].style.height = '60px';
  stylesSpan[i].style.width = '90px';
  stylesSpan[i].style.textAlign = 'center';
};
for (let i = 0; i < stylesValue.length; i+=1) {
  stylesValue[i].style.fontSize = '48px';
};

function addLeadingZero(value){
  return String(value).padStart(2, '0');
};

const startTimer = () => {
  btnStart.disabled = true;
  timerId = setInterval(() => {
    startTime = selectedDate - Date.now();
    const data = convertMs(startTime);
    dataDays.textContent = addLeadingZero(data.days);
    dataHours.textContent = addLeadingZero(data.hours);
    dataMinutes.textContent = addLeadingZero(data.minutes);
    dataSeconds.textContent = addLeadingZero(data.seconds);
    if (data.days === 0 && data.hours === 0 && data.minutes === 0 && data.seconds === 0) {
      clearInterval(timerId);
    };
  }, 0);

};
btnStart.addEventListener('click', startTimer);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


// ------------------------------------------------- Alternate code ---------------------------------------------------------


// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";

// const refs = {
//     startBtn: document.querySelector('[data-start]'),
//     timer: document.querySelector('.timer'),
// }

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//     onClose(selectedDates) {
//         selectedDate = selectedDates[0].getTime();
//         if (selectedDate <= Date.now()) {
//             Notify.failure('Please choose a date in the future');
//         }
//         else {
//             refs.startBtn.disabled = false;
//         }
//     },
// };

// let selectedDate;

// flatpickr("#datetime-picker", options);

// refs.startBtn.disabled = true;
// refs.startBtn.addEventListener('click', onStartTimer);

// function onStartTimer() {
//     const intervalID = setInterval(() => {
//         const interval = selectedDate - Date.now();
//         const date = convertMs(interval);
//         if (date.seconds < 0) {
//             clearInterval(intervalID);
//             return;
//         }
//         updateTimer(date);  
//     }, 1000)
// }

// function updateTimer({ days, hours, minutes, seconds }) {
//     refs.timer.querySelector('[data-days]').textContent = addLeadingZero(days);
//     refs.timer.querySelector('[data-hours]').textContent = addLeadingZero(hours);
//     refs.timer.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
//     refs.timer.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//     return value.toString().padStart(2, '0');
// }