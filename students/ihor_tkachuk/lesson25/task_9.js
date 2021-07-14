//Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».


export function getHoursMinSec(seconds) {
    
    let hours = Math.trunc(seconds / 3600);
        if (hours < 10) {
            hours = '0' + hours;
        }
    let minutes = Math.trunc((seconds % 3600) / 60);
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
    let restSeconds = seconds - (hours * 3600) - minutes * 60;
        if (restSeconds < 10) {
            restSeconds = '0' + restSeconds;
        } 

    return (`${hours}:${minutes}:${restSeconds}`);
}

alert(getHoursMinSec(654309));