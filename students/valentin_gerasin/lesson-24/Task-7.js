let str = prompt("Введите число!");
let k = prompt("На сколько цифр его сдвинуть?");

alert(str.substring(k) + str.substring(0, k));
