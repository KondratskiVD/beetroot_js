let number = prompt('Введите 3-хзначное число');
if(+number[0] === +number[1] || +number[0] === +number[2] || +number[2] === +number[1]) {
    alert('Одинаковые цифры есть');
}
if(+number < 100 || +number > 999) {
    alert('Вы ввели не 3-хзначное число')
}
else {
    alert('Одинаковых цифр нет');
}