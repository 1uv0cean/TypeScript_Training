const SECOND = 1e3;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default function dayOfYear(date: Date): number {
  
    const yearStart = new Date(date);
  
    yearStart.setFullYear(date.getFullYear(), 0, 0);
    const diff = date.getTime() -
      yearStart.getTime() +
      (yearStart.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
  
    return Math.floor(diff / DAY);
  }
