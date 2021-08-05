//Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.

let a = +prompt('Первое число диапазона')
let b = +prompt('Второе число диапазона')
let numRange = []
let perfectRange = []

for (a >= 0; a <= b; a++) {
    numRange.push(a)
}

let num
for (num = 0; num <= numRange.length; num++) {

    function sumDivisors() {
        var sum = 0;
        for (var i = 1; i <= num; i++) {
            if (!(num % i)) {
                sum += i;
            }
        }
        if (num == sum / 2) {
            perfectRange.push(num)
            return true;
        } else if (num != sum / 2) {
            return false;
        }
    }
    sumDivisors();
}
console.log(perfectRange);
