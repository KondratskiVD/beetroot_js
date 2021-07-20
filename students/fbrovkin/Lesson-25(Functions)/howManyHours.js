function secondsToHours(a) {
  let hours, minutes, seconds, answer;
  if (a > 3600) {
    hours = Math.floor(a / 3600);
    minutes = Math.floor((a % 3600) / 60);
    seconds = (a % 3600) % 60;
  }
  return (answer = `${hours}:${minutes}:${seconds}`);
}
let a = prompt("How many seconds would you like to convert?");
alert(secondsToHours(a));
