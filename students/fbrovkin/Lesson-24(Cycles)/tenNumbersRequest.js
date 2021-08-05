let oddNumber = 0,
    evenNumber = 0,
    positiveNumber = 0,
    negativeNumber = 0,
    zeroNumber = 0;
for(i = 1; i <= 10; i++) {
    let number = prompt('Enter Number');
    if (number > 0) {
        positiveNumber++
    }
    else if (number < 0) {
        negativeNumber++
    }
    if (number % 2 === 0) {
        evenNumber++
    }
    else {
        oddNumber++
    }
    if (number == 0) {
        zeroNumber++}
}
console.log(`You entered ${positiveNumber} of positive numbers, ${negativeNumber} of negative numbers, ${evenNumber} of even numbers, ${oddNumber} of odd numbers and ${zeroNumber} of 0`)