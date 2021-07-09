let userNumber = prompt("Загадайте число от 0 до 100");
let systemNumber;
let maxNumber = 100;
let minNumber = 0;

let answer;

outer: do {
    systemNumber = Math.floor((maxNumber - minNumber) / 2) + minNumber;
    answer = prompt(`Ваше число ${systemNumber} ? Если да - введите 1, если Ваше число >${systemNumber} введите 2, если Ваше число <${systemNumber} введите 3`);
    switch (true) {
        case answer == 1:
            break outer; //для выхода из двух цыклов
        case answer == 2:
            minNumber = systemNumber + 1;
            continue;
        case answer == 3:
            maxNumber = systemNumber;
            continue;
        default:
            break;
    }
    
} while (answer !== 1); //условие для выхода не срабатывает, а придумать другое не получаеться.

alert(`Вы загадали ${systemNumber}`);

