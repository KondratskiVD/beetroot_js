let number = prompt('Enter your number from 0 to 100')
let guessNumber;
let minNumber = 0;
let maxNumber = 100;

let answer;

attempts: do {
    guessNumber = Math.floor((maxNumber - minNumber) / 2) + minNumber;
    answer = prompt(`Is your number ${guessNumber}? If yes, enter Y. 
        If your number bigger than ${guessNumber} enter > . 
        If your number smaller than ${guessNumber} enter < `)
    switch (true) {
        case answer === 'Y':
            break attempts;
        case answer === '>':
            minNumber = guessNumber + 1;
            continue;
        case answer === '<':
            maxNumber = guessNumber;
            continue;
        default:
            break;
    }
} while (answer !== 1) {

    alert(`You guessed ${guessNumber}`)

}
