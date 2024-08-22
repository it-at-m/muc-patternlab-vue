type MucDayTile = {
  displayDay: number;
  index: number;
  viewDate: Date;
};

export type { MucDayTile };

const convertIndexToDate = (currDate: Date, index: number) =>
  new Date(currDate.getFullYear(), currDate.getMonth(), index);

const compareDates = (date1: Date, date2: Date) =>
  date1.getDate() === date2.getDate() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getFullYear() === date2.getFullYear();

export { convertIndexToDate, compareDates };
