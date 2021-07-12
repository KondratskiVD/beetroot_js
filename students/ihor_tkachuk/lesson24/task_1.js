let numBegin = +prompt('Введите начальное число диапазона');
let numEnd = +prompt('Введите конечное число диапазона');
let sum = 0;
for(i = numBegin; i <= numEnd; i++) {
    sum += i;
     } 
alert(`Сумма чисел диапазона: ${sum}`);