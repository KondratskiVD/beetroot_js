

let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');
let result = document.getElementById('output');

const button = document.getElementById('button').addEventListener('click', getNextDay);

function getNextDay() {

    var monthRes;
    var yearRes;
    var dayRes;


    if (+month.value === 2) {
        if (+day.value === 28) {
            if (+year.value % 4 == 0 || (+year.value % 400 == 0 && +year.value % 100 !== 0)) {
                dayRes = 29;
                monthRes = 2;
            } else {
                dayRes = 1;
                monthRes = 3;
            }
            yearRes = year.value;
        } else if (+day.value === 29 && +year.value % 4 == 0 || (+year.value % 400 == 0 && +year.value % 100 !== 0)) {
            dayRes = 1;
            monthRes = 3;
        } else {
            dayRes = +day.value + 1;
            monthRes = month.value;
            yearRes = year.value;
        }
        yearRes = year.value;
    } else if (+day.value == 30) {
        if (+month.value < 8 && +month.value % 2 === 0) {
            dayRes = 1;
            monthRes = +month.value + 1;
        } else if (+month.value < 8 && +month.value % 2 !== 0) {
            dayRes = 31;
            monthRes = month.value;
        } else if (+month.value >= 8 && +month.value <= 12 && +month.value % 2 === 0) {
            dayRes = +day.value + 1;
            monthRes = month.value;
        } else {
            dayRes = 1;
            monthRes = +month.value + 1;
        }
        yearRes = year.value;
    } else if (+day.value === 31) {
        if (+month.value === 12) {
            dayRes = 1;
            monthRes = 1
            yearRes = +year.value + 1;
        } else {
            dayRes = 1;
            monthRes = +month.value + 1;
            yearRes = year.value;
        }

    } else {
        dayRes = +day.value + 1;
        monthRes = month.value;
        yearRes = year.value;
    }

    result.innerHTML = `${dayRes} ${monthRes} ${yearRes}`;
}



