// function factorial(a) {
//   let res = 1;
//   for (let i = 1; i <= a; i++) {
//     res *= i;
//   }
//   return res;
// }

function factorial(number) {
  if (number === 1) return number;
  return number * factorial(number - 1);
}

let number = +prompt("enter number to know its factorial");
alert(factorial(number));
