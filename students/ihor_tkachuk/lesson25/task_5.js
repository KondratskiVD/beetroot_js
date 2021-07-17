//Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.


let perNum = +prompt('Введите число');

export function isPerfectNumber(perNum) {
    let sum = 1;
    for (let i = 2; perNum >= i ; i++) {
        
        if (perNum % i === 0) {
            sum += i;
        }    
    }
    return (sum / 2 === perNum) ? true : false;
        
}

alert(isPerfectNumber(perNum));

