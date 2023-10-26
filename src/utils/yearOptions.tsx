import { getYear } from 'date-fns';

const currentYear = getYear(new Date());

export const yearOptions = [...Array(100)]
  .map((_, i) => currentYear - i)
  .map((year) => ({ label: year.toString(), value: year.toString() }));
