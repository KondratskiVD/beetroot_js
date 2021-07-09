let number = document.getElementById('num');
let result = document.getElementById('qty');
let button = document.getElementById('btn');
let sum = 0;

button.addEventListener('click', calc);



function calc() {
    for (i = 1; i <= +number.value.length; i++) {
        sum = sum + 1;
    }
    number.value = '';
    result.innerHTML = sum;
}