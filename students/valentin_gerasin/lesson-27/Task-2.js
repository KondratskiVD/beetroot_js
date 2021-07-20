function fraction(numerator, denominatior) {
    return { numberOne: numerator, numberTwo: denominatior }
}
let fractionOne = fraction(5, 8)
let fractionTwo = fraction(4, 7)


function sum(fractionOne, fractionTwo) {
    let sumOne = fractionOne.numberOne + fractionTwo.numberOne
    let sumTwo = fractionOne.numberTwo + fractionTwo.numberTwo
    return (`Результат сложения: ${sumOne}/${sumTwo}`)
}
console.log(sum(fractionOne, fractionTwo));


function subtract(fractionOne, fractionTwo) {
    let subtractOne = fractionOne.numberOne - fractionTwo.numberOne
    let subtractTwo = fractionOne.numberTwo - fractionTwo.numberTwo
    return (`Результат вычитания: ${subtractOne}/${subtractTwo}`)
}
console.log(subtract(fractionOne, fractionTwo));


function multiplication(fractionOne, fractionTwo) {
    let multiplicationOne = fractionOne.numberOne * fractionTwo.numberOne
    let multiplicationTwo = fractionOne.numberTwo * fractionTwo.numberTwo
    return (`Результат умножения: ${multiplicationOne}/${multiplicationTwo}`)
}
console.log(multiplication(fractionOne, fractionTwo))


function divide(fractionOne, fractionTwo) {
    let divideOne = fractionOne.numberOne * fractionTwo.numberTwo
    let divideTwo = fractionOne.numberTwo * fractionTwo.numberOne

    return (`Результат деления: ${divideOne}/${divideTwo}`)
}
console.log(divide(fractionOne, fractionTwo))


function reduce(fractionOne, fractionTwo) {
    let divider
    let a = fractionOne
    let b = fractionTwo
    while (a != 0 && b != 0) {
        if (a > b) {
            a = a % b
        } else {
            b = b % +a
        }
        divider = a + b
    }
    return (`Результат сокращения: ${fractionOne / divider}/${fractionTwo / divider}`)
}
console.log(reduce(4, 10))
