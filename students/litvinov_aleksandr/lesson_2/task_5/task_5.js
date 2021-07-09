
let items = document.getElementById('item');

let button = document.getElementById('add');
button.addEventListener('click', getAdd);

let calc = document.getElementById('calc');
calc.addEventListener('click', calculate);

let pos = document.getElementById('pos');
let neg = document.getElementById('neg');
let zero = document.getElementById('zero');
let even = document.getElementById('even');
let odd = document.getElementById('odd');

const list = [];
let num = document.getElementById('number');
let pozSum = 0;
let zeroSum = 0;
let negSum = 0;
let evenSum = 0;
let oddSum = 0;


function getAdd() {
    list.push(' ' + num.value)
    items.innerHTML = list;
    clear();
}

function clear() {
    number.value = "";
}


function calculate() {
    for (i = 0; i < list.length; i++) {
        if (+list[i] > 0) {
            pozSum = +pozSum + 1;
        }
        pos.innerHTML = pozSum;
    }

    for (i = 0; i < list.length; i++) {
        if (+list[i] < 0) {
            negSum = +negSum + 1;
        }
        neg.innerHTML = negSum;
    }

    for (i = 0; i < list.length; i++) {
        if (+list[i] === 0) {
            zeroSum = +zeroSum + 1;
        }
        zero.innerHTML = zeroSum;
    }

    for (i = 0; i < list.length; i++) {
        if ((+list[i] % 2) === 0) {
            evenSum = +evenSum + 1;
        }
        even.innerHTML = evenSum;
    }

    for (i = 0; i < list.length; i++) {
        if ((+list[i] % 2) !== 0) {
            oddSum = +oddSum + 1;
        }
        odd.innerHTML = oddSum;
    }

}


