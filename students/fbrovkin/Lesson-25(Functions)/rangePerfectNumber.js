function range(lowerBorder, higherBorder) {
  for (let counter = lowerBorder; counter <= higherBorder; counter++) {
    perfectNumber(counter);
  }
}
function perfectNumber(a) {
  let sum = 0;
  for (i = 0; i < a; i++) {
    if (a % i === 0) {
      sum += i;
    }
  }
  if (sum === a) {
    console.log(sum);
  }
}
let lowerBorder = prompt("enter lower border of range"),
  higherBorder = prompt("enter lower border of range");
range(lowerBorder, higherBorder);
