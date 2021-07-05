let y = prompt('Enter year');

if (y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0)) {
    alert('This a year is intercalary!')
}
else {
    alert('This is a standard boring small sad year, one of majority you`ll spend in misery and poverty')
};