
let year = prompt('Enter a year');

if (year % 4 == 0 || (year % 400 == 0 && year % 100 !== 0)) {
    console.log('this year is leap');
} else {
    console.log('this year is not leap');
}