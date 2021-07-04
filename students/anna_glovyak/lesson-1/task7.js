let sum = prompt("Введите сумму покупки");
let disconSum = 0;
switch (true) {
    case (sum >= 200 && sum < 300):
        disconSum = sum - ((sum / 100) * 3);
        alert(`Сумма со скидкой ${disconSum}`);
        break;
    case (sum >= 300 && sum < 500):
        disconSum = sum - ((sum / 100) * 5);
        alert(`Сумма со скидкой ${disconSum}`);
        break;
    case (sum >= 500):
        disconSum = sum - (sum / 100) * 7;
        alert(`Сумма со скидкой ${disconSum}`);
        break;
}