import dayjs from 'dayjs';

export const format = (date: Date, formatTo: 'D MMMM YYYY' | 'DD/MM/YY-h A') =>
  dayjs(date, formatTo);
