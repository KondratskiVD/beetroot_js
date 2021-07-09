let firstNum = document.getElementById('first');
let secondNum = document.getElementById('second');
let divisor = document.getElementById('divisor');;
let button = document.getElementById('calc');
button.addEventListener('click', calc);



function calc() {
    while (+firstNum.value != 0 && +secondNum.value != 0) {
        if (+firstNum.value > +secondNum.value) {
            firstNum.value = +firstNum.value % +secondNum.value;
        } else {
            secondNum.value = +secondNum.value % +firstNum.value;
        }
        divisor.innerHTML = (+firstNum.value + (+secondNum.value));
    }
    firstNum.value = '';
    secondNum.value = '';
}