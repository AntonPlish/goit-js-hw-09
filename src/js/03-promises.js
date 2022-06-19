import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);
  
function onFormSubmit(event) {
  event.preventDefault();
  // console.dir(event.currentTarget); // виведення об`єкту
  const formElements = event.currentTarget.elements;
  const inputDelay = parseInt(formElements.delay.value);
  const inputStep = parseInt(formElements.step.value);
  const inputPosition = parseInt(formElements.amount.value);
  let step = inputDelay;

  for (let i = 1; i <= inputPosition; i += 1) {
    createPromise(i, step);
    step = step + inputStep;
  };
};

function createPromise(inputPosition, delay) {
  const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        new Promise(resolve => {
          setTimeout(() => {
            Notiflix.Notify.success(`✅ Fulfilled promise ${inputPosition} in ${delay}ms`);
          }, delay);
        });
      } else {
        new Promise(reject => {
          setTimeout(() => {
            Notiflix.Notify.failure(`❌ Rejected promise ${inputPosition} in ${delay}ms`);
          }, delay);
        });
  };
};
