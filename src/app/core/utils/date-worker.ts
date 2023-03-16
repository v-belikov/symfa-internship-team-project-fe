import dayjs from 'dayjs';
import { DateFormat } from './models';

export const format = (date: Date, formatTo: DateFormat) =>
  dayjs(date, formatTo);
