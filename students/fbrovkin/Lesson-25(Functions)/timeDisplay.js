function timeDisplay(a, b, c) {
  if (a > 23 || b > 59 || c > 59) {
    return (answer = "enter real values");
  }
  if (!b) {
    b = "00";
  }
  if (!c) {
    c = "00";
  }
  if (b.length < 2) {
    b = `0${b}`;
  }
  if (c.length < 2) {
    c = `0${c}`;
  }
  console.log(b.length);
  return (answer = `${a}:${b}:${c}`);
}
let answer;
let a = prompt("enter hours"),
  b = prompt("enter minutes"),
  c = prompt("enter seconds");
timeDisplay(a, b, c);
alert(answer);
