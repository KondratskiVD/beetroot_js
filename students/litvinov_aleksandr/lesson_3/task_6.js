import { checkNumber } from './task_5.js';

function numbers(min, max) {
    for (let i = min; i <= max; i++) {
        if (checkNumber(i)) {
            console.log(i);
        }
    }
}
numbers(0, 1000)
