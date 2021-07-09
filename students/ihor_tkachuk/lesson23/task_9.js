let resalt = 0;
let answer1 = prompt('Где находится Украина: 1) Европа 2) Азия 3) Африка');
if(answer1 == 'Европа') {
    resalt += 2 ;
}
let answer2 = prompt('Где находится Камерун: 1) Европа 2) Азия 3) Африка');
if(answer2 == 'Африка') {
    resalt += 2 ;
}
let answer3 = +prompt('Сколько континентов на планете Земля: 1) 7;  2) 6;  3) 5; ');
if(answer3 == 7) {
    resalt += 2 ;
}
if(resalt <= 4 && resalt > 0) {
alert(`Результат: ${resalt} балла`)
}
if(resalt === 6 || resalt === 0) {
    alert(`Результат: ${resalt} баллов`)
    } 