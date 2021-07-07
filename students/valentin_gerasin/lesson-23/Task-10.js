let day = prompt('Введите день:');
let month = prompt('Введите месяц:');
let year = prompt('Введите год:');

let newDay = +day + 1;
let newMonth = +month;
let newYear = +year;

if (day == 31) {
    newDay = 1
    newMonth = +month + 1
}

if (day == 31 && month == 12) {
    newDay = 1
    newMonth = 1
    newYear = +year + 1
}

alert(Number(newDay) + " " + Number(newMonth) + " " + Number(newYear))













