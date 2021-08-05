let start = document.getElementById('start');
let end = document.getElementById('end');
let sum = 0;
let result = document.getElementById('sum');
let button = document.getElementById('calc');

button.addEventListener('click', calc);





function calc() {
    for (let i = +start.value; i <= +end.value; i++) {
        sum = sum + i;
    }
    result.innerHTML = sum;
    start.value = '';
    end.value = '';
}