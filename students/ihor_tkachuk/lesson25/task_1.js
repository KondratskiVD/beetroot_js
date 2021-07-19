//Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.


let a = prompt('Первое число:');
let b = prompt('Второе число:');

function twoNumbers(a,b) {
    if (a < b) {
        return -1;
    }
    return a - b ? 1 : 0;
}

let num = twoNumbers(a,b);
alert(num);
