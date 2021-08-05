let a = +prompt('Введите первое число: x>0');
let b = +prompt('Введите второе число y>0');

if (a <= 0 || b <= 0) {
    alert('Введен неверный диапазон')
} else {
    while (a !== 0 && b !== 0) {
        if (a > b) {
            a = a % b
        } else {
            b = b % a
        }
    }
    alert(a + b)
}

