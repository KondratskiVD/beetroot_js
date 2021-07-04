let userNumber = prompt("Введите трёхзначное число");

if (userNumber.length > 3 || userNumber.length < 3) {
    alert("Некорректное число")
} else if (userNumber[0] == userNumber[1] || userNumber[0] == userNumber[2] || userNumber[1] == userNumber[2]) {
    alert("Есть одинаковые числа")   
}  else {
    alert("Нет одинаковых чисел")
}
