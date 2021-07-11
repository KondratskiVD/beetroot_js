let number = document.getElementById('number');
let button = document.getElementById('calc');
let result = document.getElementById('sumDivisors');
button.addEventListener('click', getDivisors);

function getDivisors() {
    const divisors = [];
    for (i = +number.value; i > 0; i--) {
        if (+number.value % i === 0) {
            divisors.push(' ' + i)
        }
    }
    result.innerHTML = divisors;
}