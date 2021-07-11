import { getTimeInSeconds } from './task8.js';
import { getTime } from './task9.js';

let data1Hours = +prompt("Введите часы");
let data1Minutes = +prompt("Введите минуты");
let data1Seconds= +prompt("Введите секунды");

let data2Hours = +prompt("Введите часы");
let data2Minutes = +prompt("Введите минуты");
let data2Seconds= +prompt("Введите секунды");

let firstDataInSeconds = getTimeInSeconds(data1Hours, data1Minutes, data1Seconds);
let secondDataInSeconds = getTimeInSeconds(data2Hours, data2Minutes, data2Seconds);

let resultIneconds = Math.abs(firstDataInSeconds - secondDataInSeconds);

alert(getTime(resultIneconds));