//Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»


import {getHoursMinSec} from './task_9.js';
import {getSeconds} from './task_8.js';

function getTimeDifference(h1, m1, s1, h2, m2, s2) {

    let secDifference = getSeconds(h1, m1, s1) - getSeconds(h2, m2, s2);
        if (getSeconds(h1, m1, s1) < getSeconds(h2, m2, s2)) {
            secDifference = getSeconds(h2, m2, s2) - getSeconds(h1, m1, s1);
        }
    let timeDifference = getHoursMinSec(secDifference);

    return timeDifference;
}

alert(getTimeDifference(10, 3, 43, 17, 3, 44));