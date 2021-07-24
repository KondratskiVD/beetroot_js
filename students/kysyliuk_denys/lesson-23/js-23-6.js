let n = prompt('Введите кол долларов:');
    let currency = prompt('EUR = 1, UAH = 2, AZN = 3');
    switch(currency) {
        case '1':
            message = (n*0.84 + 'EUR');
            break;
        case '2':
            message = (n*27.41 + 'UAH');
            break;
        case '3':
            message = (n*1,70 + 'AZN');
            break;
}
alert( message );