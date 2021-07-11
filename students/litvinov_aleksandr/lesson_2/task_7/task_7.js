let number = document.getElementById('num');
let index = document.getElementById('index');
let result = document.getElementById('newNum');
let button = document.getElementById('change');
button.addEventListener('click', change)


function change() {
    let newNumber = [];

    for (let i = +index.value; i < +number.value.length; i++) {
        newNumber.push(number.value[i])
    }
    for (let i = 0; i < +index.value; i++) {
        newNumber.push(number.value[i])
    }
    result.innerHTML = (newNumber.join(''));
}