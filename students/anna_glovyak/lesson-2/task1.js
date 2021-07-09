let a = Number(prompt('Введите начало диапазона'));
let b = Number(prompt('Введите конец диапазона'));
let sum = 0;

for (let i = a; i < b + 1; i++) {
    sum += i;   
}
 alert(`Сумма чисел в диапазоне от ${a} до ${b} равна ${sum}`);