let num = prompt('Enter fife-digit number')

if (num.length === 5) {
    if (num[0] === num[4] && num[1] === num[3]) {
        console.log('This number is a palindron');
    } else {
        console.log('This number is not a palindron');
    }
} else {
    console.log('You entered incorrect number');
}