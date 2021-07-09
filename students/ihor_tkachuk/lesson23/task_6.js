let amount = prompt('Введите сумму обмена');

let typeCurrency = prompt('Выберите валюту: EUR, UAH или AZN');

const EUR = 1.19;

const UAH = 0.036;

const AZN = 0.59;

switch(typeCurrency) {
    case 'EUR':
        alert(`Ваша сумма ${EUR * amount} $`);        
    break;
    case 'UAH':
        alert(`Ваша сумма ${UAH * amount} $`);
    break;
    case 'AZN':
        alert(`Ваша сумма ${AZN * amount} $`);
    break;
    default:
        alert ('Что-то пошло не так(');
}