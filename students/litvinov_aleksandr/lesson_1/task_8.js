let lengthCircle = prompt('Введите длину окружности');
let perimetrSquare = prompt('Введите периметр квадрата');

let a = perimetrSquare / 4;
let d = lengthCircle / Math.PI;

if (a > d) {
    console.log('Окружность вписывается в квадрат');
} else {
    console.log('Окружность не вписывается в квадрат');
}

