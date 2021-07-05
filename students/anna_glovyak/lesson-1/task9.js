let answer1 = prompt('Сколько дней в году? a. 367, b. 365, c. 700');
let answer2 = prompt('Сколько грамм в килограме? a. 1000, b. 100, c. 0');
let answer3 = prompt('Если хочешь набрать 2 балла выбери вариант c.: a. не выберу, b. неа c. ну ладноб выберу');

let finalBall = 0;

if (answer1 == 'b') {
    finalBall += 2;
} if (answer2 == 'a') {
    finalBall += 2;
} if (answer3 == 'c') {
    finalBall += 2;
} 
if (finalBall == 0) {
    alert('Вы дали 0 правильных ответов')
} else {
alert(`Вы набрали ${finalBall} баллов`)};