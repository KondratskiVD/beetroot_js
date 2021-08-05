let toCalc = prompt("Введите что нужно решить. В формате 12+3");
let operation = '';
let indexOfOperation;
let firstNumber = '';
let secondNumber = '';
let result;

// определяем операцию
for (let i = 0; i < toCalc.length; i++) {
    switch (true) {
        case toCalc[i] == '+':
            operation = '+';
            indexOfOperation = i;
            break;
        case toCalc[i] == '-':
            operation = '-';
            indexOfOperation = i;
            break;
        case toCalc[i] == '*':
            operation = '*';
            indexOfOperation = i;
            break;
        case toCalc[i] == '/':
            operation = '/';
            indexOfOperation = i;
            break;
        default:
            break;
    }
}

// определяем числа

for (let i = 0; i < indexOfOperation; i++) {
    firstNumber = firstNumber + String(toCalc[i]);
}
for (let i = indexOfOperation + 1; i < toCalc.length; i++) {
    secondNumber = secondNumber + String(toCalc[i]);
}

// в зависимости от операции выводим результат

switch (true) {
        case operation == '+':
            result = Number(firstNumber) + Number(secondNumber)
            break;
        case operation == '-':
            result = Number(firstNumber) - Number(secondNumber)
            break;
        case operation == '*':
            result = Number(firstNumber) * Number(secondNumber)
            break;
        case operation == '/':
            result = Number(firstNumber) / Number(secondNumber)
            break;
        default:
            break;
    }

console.log(result)