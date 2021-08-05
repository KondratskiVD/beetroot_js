let year = prompt('Введите год');
if(+year % 400 === 0 || (+year % 4 === 0 && +year % 100 !== 0)) {
    alert('Год високосный');
}
else {
    alert('Год не високосный');
}