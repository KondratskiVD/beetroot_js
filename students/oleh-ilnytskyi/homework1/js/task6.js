let btn6El = document.getElementById('task6');

btn6El.addEventListener('click', function (){
    alert(converter());
})

function converter(){

    let inputUSD, usd, currencyToConvert, result, curency;
    do {
        inputUSD = prompt('Введите сумму в USD:');
        usd = parseInt(inputUSD);
        do{
            currencyToConvert = parseInt(prompt('Выберите валюту для конвертации: 1 - EUR, 2 - UAN, 3 - AZN'));
            if(currencyToConvert < 1 || currencyToConvert > 3 ){
                currencyToConvert = null;
            }
        } while (!currencyToConvert)

    } while (!usd);

    switch (currencyToConvert){
        case 1:
            result = usd * 0.84;
            curency = 'EUR';
            break;
        case 2:
            result = usd * 27.27;
            curency = 'UAN';
            break;
        case 3:
            result = usd * 1.7;
            curency = 'AZN';
            break;

    }
    return  `${usd} долларов США равняются - ${result.toLocaleString('uk')} ${curency}`;
}