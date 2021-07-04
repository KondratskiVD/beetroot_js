let number = prompt('Введите пятизнаное число');

if (number.length > 5 || number.length < 5) {
    alert("Число введено некоректно")
} else if (number[0] == number[4]  && number[1] == number[3]) {
    alert('Это полиндром')
} else {
    alert('Это не полиндром')
}