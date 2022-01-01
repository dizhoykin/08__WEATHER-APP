const daysOfWeekMap = {
    0: 'SUN',
    1: 'MON',
    2: 'TUE',
    3: 'WED',
    4: 'THU',
    5: 'FRI',
    6: 'SAT',
}

const iconNameToSizeMap = {
    cloudy: { width: 264, height: 166},
    sunny: { width: 208, height: 213},
    stormy: { width: 246, height: 187},
    snowy: { width: 230, height: 196},
    partlycloudy: {width: 230, height:209},
    rainy: { width: 160, height: 222},
}

const dates = document.querySelectorAll('.date');
const days = document.querySelectorAll('.day-of-week');

for (let i = 0; i < dates.length; i++) {
  let date = new Date();
  date.setDate(date.getDate() + i + 1);
  days[i].innerHTML = (Object.values(daysOfWeekMap[date.getDay()])).join("");
  dates[i].innerHTML = date.getDate();
};
