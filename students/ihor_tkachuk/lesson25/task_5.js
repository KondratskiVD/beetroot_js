//Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.


let perNum = +prompt('Введите число');

export function isPerfectNumber(perNum) {
    let sum = 1;
    for (let i = 2; perNum >= i ; i++) {
        
        if (perNum % i === 0) {
            sum += i;
        }    
    }
    if (sum / 2 === perNum) {
        return true;
    }
    else {
        return false;
    }
}

alert(isPerfectNumber(perNum));

