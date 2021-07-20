function compare(a, b) {
  let answer;
  if (a < b) {
    answer = "-1";
  } else if (a > b) {
    answer = "1";
  } else {
    answer = "0";
  }
  return answer;
}
let a = +prompt("Enter first number"),
  b = +prompt("Enter second number");
alert(compare(a, b));
