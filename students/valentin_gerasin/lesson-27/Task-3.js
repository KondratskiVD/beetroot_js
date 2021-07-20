let time = {
    hours: 21,
    minutes: 59,
    seconds: 50,
}

function showTime() {
    console.log(`Время: ${time.hours}:${time.minutes}:${time.seconds}`);
    return showTime
}
showTime()

function addSeconds() {
    let sec = +prompt('Введите количество секунд, которое хотите добавить');
    if (time.seconds + sec >= 60) {
        time.seconds = (time.seconds + sec) - Math.trunc((time.seconds + sec) / 60) * 60
        time.minutes = time.minutes + Math.trunc((time.seconds + sec) / 60)
        if (time.minutes >= 60) {
            time.hours = time.hours + Math.trunc(time.minutes / 60)
            time.minutes = time.minutes - Math.trunc(time.minutes / 60) * 60
        }
    }
    return console.log(`Время: ${time.hours}:${time.minutes}:${time.seconds}`);
}
addSeconds()

function addMinutes() {
    let min = +prompt('Введите количество минут, которое хотите добавить');
    if (time.minutes + min >= 60) {
        time.hours = time.hours + Math.trunc((time.minutes + min) / 60)
        time.minutes = (time.minutes + min) - Math.trunc((time.minutes + min) / 60) * 60
    }
    return console.log(`Время: ${time.hours}:${time.minutes}:${time.seconds}`);
}
addMinutes()

//Счетчик часов не ограничен




