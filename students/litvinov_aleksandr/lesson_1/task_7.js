let sum = prompt('Enter your sum of purchase');

if (sum < 200) {
    console.log('You do not have any discount');

} else if (sum >= 200 && sum < 300) {
    sum = sum - (sum * 0.03);
    console.log(sum);

} else if (sum >= 300 && sum < 500) {
    sum = sum - (sum * 0.05)
    console.log(sum);

} else if (sum >= 500) {
    sum = sum - (sum * 0.07)
    console.log(sum);
}




