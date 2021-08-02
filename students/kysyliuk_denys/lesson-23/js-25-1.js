let a = prompt("Введите первое число");
let b = prompt("Введите второе число");
let myMath = math();

function math() {
    if(a < b) {
        prompt("-1")
    }

    if(a > b) {
        prompt("1")
    }

    if(a = b) {
        prompt("0")
    }
}