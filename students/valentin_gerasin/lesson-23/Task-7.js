let amount = prompt('Введите сумму:');
if (amount >= 200 && amount < 300)
    alert(amount / 100 * 97 + '$ со скидкой в 3%');
else if (amount >= 300 && amount < 500)
    alert(amount / 100 * 95 + '$ со скидкой в 5%');
else if (amount >= 500)
    alert(amount / 100 * 93 + '$ со скидкой в 7%');