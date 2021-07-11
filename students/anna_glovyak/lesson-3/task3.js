let num1 = prompt('Введите цифру');
let num2 = prompt('Введите цифру');
let num3 = prompt('Введите цифру');
let number = '';

function getNumber(a, b, c){
    number = a + b + c;  
    return alert(`Вы ввели число ${+number}`);
}
getNumber(num1, num2, num3);
