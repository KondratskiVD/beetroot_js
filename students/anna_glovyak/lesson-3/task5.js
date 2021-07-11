function checkPerfect (num) {
    let sumDividers = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            sumDividers += i;
        }
    }
    if (sumDividers === num && num !== 0) {
        return true;
    } else return false;
}

// let number = prompt("Введите число");
// alert(checkPerfect(+number));

export { checkPerfect };