let usd = prompt('Введите сумму в USD');
let choosenCurrency = prompt('Выберите в какую валюту хотите конвертировать(поставьте соответствующую цыфру): 1. EUR, 2. UAN, 3. AZN');
let finalSum;

switch(choosenCurrency) {
    case '1':
      finalSum = Number(usd) * 0.84;
      alert(`${finalSum} EUR`); 
      break;
  
    case '2': 
        finalSum = Number(usd) * 6.47;
        alert(`${finalSum} UAN`);
      break;

    case '3': 
      finalSum = Number(usd) * 1.70;
      alert(`${finalSum} AZN`);
    break;
  
    default:
      alert('Вы выбрали неправильное значение');
      break;
  }