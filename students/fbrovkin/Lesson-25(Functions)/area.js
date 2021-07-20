function area(a, b) {
  let result,
    c = a + b;
  alert((result = a && b ? a * b : (c *= c)));
}
let a = prompt("enter first side of your rectangle"),
  b = prompt("enter first side of your rectangle");
area(a, b);
