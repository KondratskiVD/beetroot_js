let lengthCyrcle = prompt('Введите длинну окружности');
let perimetrSquare = prompt('Введите периметр квадрата');

let diametr = +lengthCyrcle / Math.PI;
let squareSide = +perimetrSquare / 4;

if (diametr <= squareSide) {
    alert("Этот круг можно вписать в квадрат");
} else {
    alert("Этот круг нельзя вписать в квадрат");
}
