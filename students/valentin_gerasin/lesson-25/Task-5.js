// Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

var num = +prompt('Введите число')
function sumDivisors() {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        if (!(num % i)) {
            sum += i;
        }
    }
    alert('Сумма всех делителей числа, включая само число равно ' + sum)
    if (num == sum / 2) {
        alert('число совершенное')
        return true;
    } else if (num != sum / 2) {
        alert('число не совершенное')
        return false;
    }
}
sumDivisors();