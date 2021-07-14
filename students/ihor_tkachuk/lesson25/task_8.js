//Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.


import {showTime} from './task_7.js';

export function getSeconds(h, m, s) {
    
    showTime(h, m, s);
    let seconds = h * 3600 + m * 60 + s;
    return seconds;
}

alert(getSeconds(4, 0, 56));