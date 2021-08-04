function secondsToHours(a) {
  let hours, minutes, seconds;
  if (a > 3600) {
    hours = Math.floor(a / 3600);
    minutes = Math.floor((a % 3600) / 60);
    seconds = (a % 3600) % 60;
  }
  if (a > 359999) {
    return "This is more then 99 hours";
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
}
let a = prompt("How many seconds would you like to convert?");
alert(secondsToHours(a));
