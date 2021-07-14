let number = prompt('enter number');
for(let divider = 0; divider <= number; divider++) {
    if(number % divider == 0) {
        console.log(divider)
    }
}