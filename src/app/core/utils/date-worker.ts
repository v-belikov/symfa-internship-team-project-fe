import dayjs, { QUnitType } from 'dayjs';
import { DateFormat } from './models';

export const format = (date: Date, formatTo: DateFormat) =>
  dayjs(date).format(formatTo);

export const toDate = (date: string, formatFrom: string = 'YYYY-MM-DD') =>
  dayjs(date, formatFrom);

export const dateDiff = (
  date1: string | Date,
  date2: string | Date,
  units: QUnitType,
) => dayjs(date1).diff(date2, units);
