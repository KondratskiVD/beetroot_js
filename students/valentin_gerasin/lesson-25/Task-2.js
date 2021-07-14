let number = +prompt('Введите число')

function factorial(number) {
    return (number != 1) ? number * factorial(number - 1) : 1;
}

alert(factorial(number))

