let userDay = Number(prompt('Введите день своего рождения'));
let userMonth = Number(prompt('Введите месяц своего рождения'));
let userYear = Number(prompt('Введите год своего рождения'));

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeap(year) {
    if ((year % 400 == 0) ||((year % 4 == 0) && ( year % 100 !== 0))) {
        return true;
    } else {
        return false;
    }
}

if (isLeap(userYear)) {
    months[1] = 29;
}

if (userDay == months[userMonth - 1]) {
    if(userMonth == 12) {
        userMonth = 1;
        userYear += 1;
    } else {
        userMonth +=1;
    }
    userDay = 1;
} else {
    userDay +=1;
}

alert(`${userDay}.${userMonth}.${userYear}`)


