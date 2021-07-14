//Написать функцию, которая вычисляет факториал переданного ей числа.


let n = prompt('Число:')
function factorial(n) {
    let result = 0;
    for(i = 1; i <= n; i++) {
    result *= i;
    }
    return result;
}

alert(`Факториал числа ${n} равен ${factorial(n)}`);