let five_digit_num = prompt('Введите 5-тиразрядное число');
if(+five_digit_num[0] === +five_digit_num[4] && +five_digit_num[1] === +five_digit_num[3]) {
    alert('Это палиндром');
}
else {
    alert('Это не палиндром');
}