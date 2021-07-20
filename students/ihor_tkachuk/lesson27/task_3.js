//3. Создать объект, описывающий время (часы, минуты, секунды);


let time = {
    hours: 15,
    minutes: 20,
    seconds: 30
};


//Функция вывода времени на экран;

function showTime(obj) {
    let arr = [];
    for (let key in time) arr.push(obj[key]);
    console.log(arr.join(':'));
}
showTime(time);


//Функция изменения времени на переданное количество секунд;

function changeTime(sec) {
    time.seconds += sec;
    if (time.seconds >= 60) {
        time.minutes += Math.floor(time.seconds / 60); 
        time.seconds -= Math.floor(time.seconds / 60) * 60;
    } 
    if (time.minutes >= 60) {
        time.hours += Math.floor(time.minutes / 60);
        time.minutes -= Math.floor(time.minutes / 60) * 60;
    }
    return Object.assign({}, time);
}
console.log(changeTime(555));


//Функция изменения времени на переданное количество минут;

function changeTimeMin(min) {
    time.minutes += min; 
    if (time.minutes >= 60) {
        time.hours += Math.floor(time.minutes / 60);
        time.minutes -= Math.floor(time.minutes / 60) * 60;
    }
    return Object.assign({}, time);
}
console.log(changeTimeMin(368));


//Функция изменения времени на переданное количество часов;

function changeTimeHour(h) { 
    time.hours += h;
    return Object.assign({}, time);
}

console.log(changeTimeHour(368));
