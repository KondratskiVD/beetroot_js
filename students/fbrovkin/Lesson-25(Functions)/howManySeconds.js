function howManySeconds(a, b, c) {
  let answer;
  return (answer = a * 3600 + b * 60 + c);
}
let a = prompt("enter hours"),
  b = prompt("enter minutes"),
  c = prompt("enter seconds");
alert(howManySeconds(a, b, c));
