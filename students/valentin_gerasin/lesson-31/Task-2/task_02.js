function buttonOne() {
    document.getElementById('disp').value += document.getElementById('one').value
}

function buttonTwo() {
    document.getElementById('disp').value += document.getElementById('two').value
}

function buttonThree() {
    document.getElementById('disp').value += document.getElementById('three').value
}

function buttonFour() {
    document.getElementById('disp').value += document.getElementById('four').value
}

function buttonFive() {
    document.getElementById('disp').value += document.getElementById('five').value
}

function buttonSix() {
    document.getElementById('disp').value += document.getElementById('six').value
}

function buttonSeven() {
    document.getElementById('disp').value += document.getElementById('seven').value
}

function buttonEight() {
    document.getElementById('disp').value += document.getElementById('eight').value
}

function buttonNine() {
    document.getElementById('disp').value += document.getElementById('nine').value
}

function buttonZero() {
    document.getElementById('disp').value += document.getElementById('zero').value
}

function buttonMinus() {
    document.getElementById('disp').value += document.getElementById('minus').value
}

function buttonPlus() {
    document.getElementById('disp').value += document.getElementById('plus').value
}

function buttonClear() {
    document.getElementById('disp').value = document.getElementById('clear').value
}

function buttonMult() {
    document.getElementById('disp').value += document.getElementById('mult').value
}

function buttonDiv() {
    document.getElementById('disp').value += document.getElementById('div').value
}

function buttonLeftBr() {
    document.getElementById('disp').value += document.getElementById('left-bracket').value
}

function buttonRightBr() {
    document.getElementById('disp').value += document.getElementById('right-bracket').value
}

function getAnswer() {
    document.getElementById('equal').value = document.getElementById('disp').value
    let a = document.getElementById('equal').value
    let b = eval(a)
    document.getElementById('disp').value = b
}