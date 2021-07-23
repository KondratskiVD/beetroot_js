const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

let numberDay = 1;
let numberMonth = 4;
let numberYear = 2021;

if (isLeap(numberYear)) {
    months[1] = 29
}

function isLeap(year) {
    return year % 4 == 0 || (year % 400 == 0 && year % 100 !== 0)
}

if (numberDay > months[Number(numberMonth - 1)]) {
    if (numberMonth === 12) {
        numberMonth = 1;
        numberYear +=1
    } else {
        numberMonth += 1
    }
    numberDay = 1
} else {
    numberDay +=1
}

console.log(numberDay, numberMonth, numberYear);