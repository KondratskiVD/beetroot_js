let number = prompt('Введите число от 10000 до 99999');
if (number === number.split('').reverse().join(''))
    alert('палиндром');
else
    alert('не палиндром');