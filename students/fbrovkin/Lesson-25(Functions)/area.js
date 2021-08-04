function area(a, b) {
  let result,
    c = a + b;
  return (result = a && b ? a * b : (c *= c));
}
let a = prompt("enter first side of your rectangle"),
  b = prompt("enter first side of your rectangle");
alert(area(a, b));
