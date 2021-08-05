
let fraction = (numerator, denominatior) => {
    return { numberOne: numerator, numberTwo: denominatior }
}
let fractionOne = fraction(4, 5)
let fractionTwo = fraction(2, 3)


let sum = (fractionOne, fractionTwo) => {
    let sumOne = fractionOne.numberOne + fractionTwo.numberOne
    let sumTwo = fractionOne.numberTwo + fractionTwo.numberTwo
    return (`${sumOne}/${sumTwo}`)
}
console.log(sum(fractionOne, fractionTwo));

let subtract = (fractionOne, fractionTwo) => {
    let subtractOne = fractionOne.numberOne - fractionTwo.numberOne
    let subtractTwo = fractionOne.numberTwo - fractionTwo.numberTwo
    return (`${subtractOne}/${subtractTwo}`)
}
console.log(subtract(fractionOne, fractionTwo));

let multiply = (fractionOne, fractionTwo) => {
    let multiplyOne = fractionOne.numberOne * fractionTwo.numberOne
    let multiplyTwo = fractionOne.numberTwo * fractionTwo.numberTwo
    return (`${multiplyOne}/${multiplyTwo}`)
}
console.log(multiply(fractionOne, fractionTwo))

let divide = (fractionOne, fractionTwo) => {
    let divideOne = fractionOne.numberOne * fractionTwo.numberTwo
    let divideTwo = fractionOne.numberTwo * fractionTwo.numberOne

    return (`${divideOne}/${divideTwo}`)
}
console.log(divide(fractionOne, fractionTwo))

let reduce = (fractionOne, fractionTwo) => {
    let divisor
    let one = fractionOne
    let two = fractionTwo
    while (one != 0 && two != 0) {
        if (one > two) {
            one = one % two
        } else {
            two = two % +one
        }
        divisor = one + two
    }
    return (`${fractionOne / divisor} / ${fractionTwo / divisor}`)
}
console.log(reduce(6, 8))
