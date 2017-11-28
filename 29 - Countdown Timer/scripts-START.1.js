let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now(); // Tworzy timestamp
  const then = now + (seconds * 1000);
  displayEndTime(then);
  displayTime(seconds);
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTime(secondsLeft);
  }, 1000);
}

function displayTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remaininSeconds = seconds % 60;
  const display = `${minutes}:${remaininSeconds < 10 ? '0' : ''}${remaininSeconds}`;
  // console.log({ minutes, remaininSeconds });

  timerDisplay.textContent = display;
  document.title = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();

  endTime.textContent = `Be Back At ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer(params) {
  timer(this.dataset.time);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

function startTimerFromForm(e) {
  e.preventDefault();
  const minutes = this.minutes.value;
  console.log(minutes);
  this.reset();
  timer(minutes * 60);
};

document.customForm.addEventListener('submit', startTimerFromForm);
