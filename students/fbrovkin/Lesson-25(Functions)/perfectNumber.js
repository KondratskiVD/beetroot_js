function perfectNumber(a) {
  let sum = 0;
  for (i = 0; i < a; i++) {
    if (a % i === 0) {
      sum += i;
    }
  }
  alert(
    `${sum === a ? "It really is a perfect number!" : "Try one more time"}`
  );
}
let a = +prompt("Enter a number you want to test");
perfectNumber(a);
