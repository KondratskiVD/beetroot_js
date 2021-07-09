let circuit = prompt('Введите длину окружности');
let perimeterSquare = prompt('Введите периметр квадрата');
if(+circuit / 3.14 <= +perimeterSquare / 4) {
    alert('Может!');
}
else {
    alert('Не может!');
}