function transformToNumber(a, b, c) {
  return a + b + c;
}
let a = prompt("enter first number"),
  b = prompt("enter second number"),
  c = prompt("enter third number");
let result = transformToNumber(a, b, c);
alert(`${result} is what I did`);
