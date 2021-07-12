let x = prompt ('Введите первое число');
let y = prompt ('Введите второе число');
let z = prompt ('Введите оператор');
let result = x + z + y;
let res = eval(result);
alert(`Результат: ${res}`);
let isAnotherEx = confirm('Еще пример?');

while (isAnotherEx) {
    if (true) {
    x = prompt ('Введите первое число');
    y = prompt ('Введите второе число');
    z = prompt ('Введите оператор');
    result = x + z + y;
    res = eval(result);
    alert(`Результат: ${res}`);
    isAnotherEx = confirm('Еще пример?');
    }
}
alert('Пока!')
