
function checkNumber(a) {
    let result = 0;
    for (i = 1; i < a; i++) {
        if (a % i === 0) {
            result += i;
        }
    } if (result === a) {
        return 'true';
    } else {
        return 'false'
    }
}

console.log(checkNumber(24));