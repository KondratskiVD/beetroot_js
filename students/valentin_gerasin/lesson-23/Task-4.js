let year = prompt('Введите год');
if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
    alert('Это високосный год');
}
else
    alert('Это не високосный год');