export const formatDate = stringDate => {
  const date = new Date(stringDate);

  const sMonth = date.getMonth();
  const sDay = date.getDate();
  const sYear = date.getFullYear();
  let sHour = date.getHours();
  const sMinute = date.getMinutes();
  let am_pm = 'AM';

  const iHourCheck = parseInt(sHour);

  if (iHourCheck > 12) {
    am_pm = 'PM';
    sHour = iHourCheck - 12;
  } else if (iHourCheck === 0) {
    sHour = '12';
  }

  sHour = sHour;

  return `${sDay}/${sMonth}/${sYear} ${sHour}:${sMinute} ${am_pm}`;
};
