let num1 = prompt('Enter first number'),
    num2 = prompt('Enter second number'),
    sum = 0;
    for(let i = +num1; i <= +num2; i++) {
        sum += i
    }
    console.log(sum)