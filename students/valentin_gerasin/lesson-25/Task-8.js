//Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
let h = +prompt('Hours')
let m = +prompt('Minutes')
let s = +prompt('Seconds')

function timeInSeconds() {
    let sec = (h * 3600 + m * 60 + s);
    alert(sec);
}
timeInSeconds();