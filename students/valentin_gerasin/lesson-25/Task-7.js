//Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

let hour = +prompt('Введите часы:')
let minute = +prompt('Введите минуты:')
let second = +prompt('Введите секунды:')

function showTime() {
    if (hour > 24) {
        hour = '00'
    }
    if (minute < 61) {
        minute = 0 + minute;
    } else if (minute > 60) {
        minute = '00'
    }
    if (second < 61) {
        second = 0 + second;
    } else if (second > 60) {
        second = '00'
    }
    return alert(hour + ':' + minute + ':' + second);
}
showTime()

