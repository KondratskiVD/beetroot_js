let symbol = prompt('Напиши цифру от 0 до 9');

let message = (symbol == 0) ? ')' :
    (symbol == 1) ? '!' :
    (symbol == 2) ? '@' :
    (symbol == 3) ? '#' :
    (symbol == 4) ? '$' :
    (symbol == 5) ? '%' :
    (symbol == 6) ? '^' :
    (symbol == 7) ? '&' :
    (symbol == 8) ? '*' :
    (symbol == 9) ? '(':
    'Чел ты...' ;
alert( message );