let a = +prompt("Введите начало диапазона");
let n = +prompt("Введите конец диапазона");
let sum = 0;

while (a <= n) {
    sum += a;
    a++;
}

alert(sum)
