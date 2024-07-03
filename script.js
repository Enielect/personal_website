//displaying current time in utc

const DaysOfWeek = [
  "Sunday ",
  "Monday ",
  "Tuesday ",
  "Wednesday ",
  "Thursday ",
  "Friday ",
  "Saturday ",
];

let day = document.querySelector(".utcDay");
let time = document.querySelector(".utcTime");

setInterval(() => {
  const date = new Date();
  time.innerHTML =
    padZero(date.getUTCHours()) +
    ":" +
    padZero(date.getUTCMinutes()) +
    ":" +
    padZero(date.getUTCSeconds());
  day.innerHTML = DaysOfWeek[date.getUTCDay()];
}, 1000);

function padZero(arg) {
  return arg < 10 ? "0" + arg : arg;
}
