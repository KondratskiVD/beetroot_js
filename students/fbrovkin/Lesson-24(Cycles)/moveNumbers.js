let num = prompt('enter number'),
    moveDigits = +prompt('for how many digits it must be moved?'),
    newNum;
// let b = num.slice(0, moveDigits);
// let a = num.slice(moveDigits);
// let answer = (a + b);
// console.log(answer) 

for (let i = 0; i < moveDigits; i++) {
    newNum = '';
    for(let j = 1; j < num.length; j++) {
        newNum += num[j];
    }
    newNum += num[0];
    num = newNum;
}
console.log(newNum)

