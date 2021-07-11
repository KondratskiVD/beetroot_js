let numbers = prompt('введите 10 чисел через побел', '0 1 2 3 4 5 -6 -7 -8 -9').split` `;

let positive = [...numbers].map(e => Math.sign(+e)).filter(cur => +cur == 1).length,
    negative = [...numbers].map(e => Math.sign(+e)).filter(cur => +cur == -1).length,
    zero = [...numbers].map(e => Math.sign(+e)).filter(cur => +cur == 0).length;

if (positive) alert('Положительных: ' + positive);
if (negative) alert('Отрицательных: ' + negative);
if (zero) alert('Нулей: ' + zero);