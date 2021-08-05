let num1 = prompt('enter first number'),
    num2 = prompt('enter second number');

for(; +num1 != 0 && +num2 != 0;) {
    if (num1 > num2) {
        num1 = num1 % num2
    } else {num2 = num2 % num1}
}
console.log(+num1 + +num2)