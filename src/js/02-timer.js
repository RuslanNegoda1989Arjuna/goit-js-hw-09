// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const ref = {
  btnStart: document.querySelector('[data-start]'),
};

console.log(ref.btnStart);
ref.btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const selectedDateValue = selectedDates[0].getTime();
    console.log(selectedDateValue);

    const date = new Date();
    const todayDateValue = date.getTime();
    console.log(todayDateValue);

    console.log(date);

    // Якщо дата в майбутньому вмикаєм кнопку

    if (selectedDateValue > todayDateValue) {
      ref.btnStart.disabled = false;
      const timerBack = selectedDateValue - todayDateValue;
      // console.log(timerBack);

      return console.log(convertMs(timerBack));
    } else {
      ref.btnStart.disabled = true;
      alert('Please choose a date in the future');
    }
  },
};
console.log(options.onClose);
let time = options.onClose;
flatpickr('input#datetime-picker', options);

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
