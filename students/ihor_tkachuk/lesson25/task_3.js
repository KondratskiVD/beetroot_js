//Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.


let x = prompt('Первая цифра');
let y = prompt('Вторая цифра');
let z = prompt('Третья цифра');

function threeDigit(x,y,z) {
    return String(x) + String(y) + String(z);
}
alert(`Число: ${threeDigit(x,y,z)}`);