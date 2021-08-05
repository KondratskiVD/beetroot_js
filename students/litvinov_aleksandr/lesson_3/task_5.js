
function checkNumber(a) {
    let result = 0;
    for (let i = 1; i <= (a / 2); i++) {
        if (a % i === 0) {
            result += i;
        }
    }
    if (result === a && a !== 0) {
        return true;
    } else {
        return false
    }
}
export { checkNumber };
// console.log(CheckNumber())

