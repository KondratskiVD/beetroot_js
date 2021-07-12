let numbers =  prompt ('Введите десять чисел');
let numbersPositive = 0;
let numbersNegative = 0;
let numbersNull = 0;
let numbersEven = 0;
let numbersOdd = 0;

for (let i = 0; i < 10; i++) {
if (numbers > 0 && numbers % 2 == 0) {
    numbersPositive += 1;
    numbersEven += 1;
    numbers =  prompt ('Введите число');
}
else if (numbers > 0 && numbers % 2 !== 0) {
    numbersPositive += 1;
    numbersOdd += 1;
    numbers =  prompt ('Введите число');
}
else if (+numbers < 0 && numbers % 2 == 0) {
    numbersNegative += 1;
    numbersEven += 1;
    numbers =  prompt ('Введите число');
}    
else if (+numbers < 0 && numbers % 2 !== 0) {
    numbersNegative += 1;
    numbersOdd += 1;
    numbers =  prompt ('Введите число');    
}
else if (numbers ='0') {
    numbersNull += 1;
    numbers =  prompt ('Введите число');
}
}
alert (`Положительных чисел: ${numbersPositive}`);
alert (`Отрицательных чисел: ${numbersNegative}`);
alert (`Чисел, равных 0: ${numbersNull}`);
alert(`Четных чисел: ${numbersEven}`);
alert(`Нечетных чисел: ${numbersOdd}`);