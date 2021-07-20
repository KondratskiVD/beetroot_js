function factorial(a) {
  let res = 1;
  for (let i = 1; i <= a; i++) {
    res *= i;
  }
  return res;
}
let a = +prompt("enter number to know its factorial");
const r = factorial(a);
alert(`Factorial of ${a} is ${r}`);
