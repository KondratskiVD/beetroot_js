let amount = prompt('Enter the amount of USD:');
let currency = prompt('EUR = 1, UAH = 2, AZN = 3');
switch (currency) {
    case '1':
        console.log(amount * 0.84 + 'EUR');
        break;
    case '2':
        console.log(amount * 27.35 + 'UAH');
        break;
    case '3':
        console.log(amount * 1.7 + 'AZN');
        break;
}