//Написать функцию, которая вычисляет факториал переданного ей числа.


let n = +prompt('Число:');
function factorial(n) {
        return (n === 1) ? n : n * factorial(n - 1);
        }
        
        console.log(factorial(n));
