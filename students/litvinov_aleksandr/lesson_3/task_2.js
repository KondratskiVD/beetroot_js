function calcFactorial(a) {
    let result = 1;
    for (i = 1; i < a; i++) {
        result *= (i + 1);
    } return result;
}

console.log(calcFactorial());