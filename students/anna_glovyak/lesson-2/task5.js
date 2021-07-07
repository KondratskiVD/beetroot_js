let quantityPositivNumber = 0;
let quantityNegativNumber = 0;
let quantityNulls = 0;
let quantityEven = 0;
let quantityOdd = 0;


for (let i = 0; i < 10; i++) {
    let number = Number(prompt("ВВедите число"));
    if (number !== 0) {
        if (number > 0) {
            quantityPositivNumber++;
        } if (number < 0) {
            quantityNegativNumber++;
        } if (number % 2 == 0) {
            quantityEven++;
            continue;
        } if (number % 2 !== 0) {
            quantityOdd++;
            continue;
        }
    } else {
        quantityNulls++;
    }
}

alert(`Положительных - ${quantityPositivNumber}; Отрицательных - ${quantityNegativNumber}; Нолей - ${quantityNulls}; Четных - ${quantityEven}; Нечетных - ${quantityOdd};`)