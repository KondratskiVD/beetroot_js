let result = 0;

let answerOne = +prompt('da?  1-da 2-net 3-chto?')
let answerTwo = +prompt('net?  1-da 2-net 3-ti konchenii?')
let answerThree = +prompt('pochemy?  1-patamy 2-pakachany 3-idi daleko')
let answerFour = +prompt('kto president Ameriki?  1-Putin 2-Trump 3-Bidon')
let answerFive = +prompt('chto wiberesh?  1- 1BTC 2- 2ETH 3- 5681818181SHIB ')

if (answerOne === 1) {
    result += 1
}
if (answerTwo === 1) {
    result += 1
}
if (answerThree === 2) {
    result += 1
}
if (answerFour === 1) {
    result += 1
}

if (answerFive === 3) {
    result += 1
}

alert( result )