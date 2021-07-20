function timeDisplay(a, b, c) {
  let answer;
  if (a > 23 || b > 59 || c > 59) {
    return (answer = "enter real values");
  }
  if (!b) {
    b = "00";
  }
  if (!c) {
    c = "00";
  }
  return (answer = `${a}:${b}:${c}`);
}
let a = prompt("enter hours"),
  b = prompt("enter minutes"),
  c = prompt("enter seconds");
alert(timeDisplay(a, b, c));
