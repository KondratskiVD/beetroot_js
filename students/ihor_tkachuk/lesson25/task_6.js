// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.


import {isPerfectNumber} from './task_5.js';

let minNum = prompt('Начальное число диапазона:');
let maxNum = prompt('Конечное число диапазона:');
let arrPerfect = [];

function listPerfect(minNum, maxNum) {
    for (let i = minNum; i <= maxNum; i++) {
        switch (isPerfectNumber(i)) {
            case true:
                arrPerfect.push(i);
            case false:
                continue;    
        }
    }
    return arrPerfect;
}

alert(listPerfect(minNum, maxNum));