// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    console.log(selectedDates[0].getTime());
    const date = new Date();

    console.log(date);
    console.log(date.getTime());
  },
};

flatpickr('input#datetime-picker', options);
