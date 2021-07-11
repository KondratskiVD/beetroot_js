while (true) {
    let a = +prompt('Введите первое число');
    let b = +prompt('Введите второе число');
    let op = prompt('Выберете знак: - + / *');
    let action = {
        '+': () => a + b,
        '-': () => a - b,
        '/': () => a / b,
        '*': () => a * b
    }[op];
    if (action) alert(action());

    if (!confirm('Хотите ли вы решить еще один пример?')) break;
}


