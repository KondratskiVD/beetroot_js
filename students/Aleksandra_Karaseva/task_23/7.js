let amount = prompt("Введите сумму Вашей покупки:");
if (amount >= 200 & amount < 300) {
    alert(`Сумма Вашей покупки с учетом скидки составляет: ${amount - (amount * 0.03)}`);
}
else if (amount >= 300 & amount < 500) {
    alert(`Сумма Вашей покупки с учетом скидки составляет: ${amount - (amount * 0.05)}`);
}
else if (amount >= 500) {
    alert(`Сумма Вашей покупки с учетом скидки составляет: ${amount - (amount * 0.07)}`);
}

