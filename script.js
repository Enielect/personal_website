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

const Months = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let day = document.querySelector(".utcDay");
let time = document.querySelector(".utcTime");
let month = document.querySelector(".utcMonth");
let year = document.querySelector(".utcYear");

setInterval(() => {
  const date = new Date();
  time.innerHTML =
    padZero(date.getUTCHours()) +
    ":" +
    padZero(date.getUTCMinutes()) +
    ":" +
    padZero(date.getUTCSeconds());
  day.innerHTML = DaysOfWeek[date.getUTCDay()];
  month.innerHTML = Months[date.getUTCMonth()];
  year.innerHTML = date.getFullYear();
}, 1000);

function padZero(arg) {
  return arg < 10 ? "0" + arg : arg;
}
