let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now(); // Tworzy timestamp
  const then = now + (seconds * 1000);
  displayTime(seconds);
  displayEndTime(then);
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
  const hours = Math.floor(seconds / 3600);
  const remTime = seconds % 3600;
  const minutes = Math.floor((remTime / 60));
  const remainingSeconds = seconds % 60;
  console.log({
 hours, remTime, minutes, remainingSeconds
 });
  const display = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  timerDisplay.textContent = display;
}

function displayEndTime(timeStamp) {
  const end = new Date(timeStamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  console.log(end);
  endTime.textContent = `Czas upłynie o ${hour > 12 ? (hour - 12) : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer(e) {
  timer(this.dataset.time);
}

function startTimerFromInput(e) {
  e.preventDefault();
  const minutes = this.minutes.value;
  this.reset();
  timer(minutes * 60);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', startTimerFromInput);
