function compare(a, b) {
  let answer;
  if (a < b) {
    return -1;
  }
  return a - b ? 1 : 0;
}
let a = +prompt("Enter first number"),
  b = +prompt("Enter second number");
alert(compare(a, b));
