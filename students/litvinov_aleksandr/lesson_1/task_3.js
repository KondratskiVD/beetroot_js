let num = prompt('Enter three-digit number')

if (num > 99 && num < 1000) {
    if (num[0] === num[1] || num[1] === num[2] || num[0] === num[2]) {
        console.log('You have same figures in your num');
    } else {
        console.log('You do not have the same figures in your num');
    }
}