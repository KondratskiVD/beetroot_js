function calcSquare(a, b) {
    let square = a * b;
    if (b === undefined) {
        square = a * a;
    }
    return square;
}

console.log(calcSquare());