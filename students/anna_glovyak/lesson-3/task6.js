import { checkPerfect } from './task5.js';

let min = 0;
let max = 1000;

function getPerfect() {
    for (let i = min; i <= max; i++) {
        if (checkPerfect(i)) {
            console.log(i);
        } 
    }
}
getPerfect();